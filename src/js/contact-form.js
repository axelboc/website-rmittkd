
/**
 * Contact form plugin.
 */
(function ($) {
	'use strict';
	
	var GENERIC_ERROR = 'Sorry, something went wrong. Try again later, or get in touch with us on <a href="https://www.facebook.com/rmittkd">Facebook</a>.';
	
	/**
	 * Contact form.
	 * @param {Element} root - the <form> element
	 */
	function ContactForm(root) {
		this.$root = $(root);
		this.$fields = this.$root.find('.form-field');
		this.$resultWrap = this.$root.find('.form-result-wrap');
		this.$result = this.$resultWrap.find('.form-result');
		this.$submitBtn = this.$root.find('.form-submit');
		
		// Validate fields on blur
		this.$fields.blur((function (evt) {
			this.validate(0, $(evt.target));
		}).bind(this));
		
		// Submit form via Ajax
		this.$root.submit(this.submit.bind(this));
	}
	
	/**
	 * Perform client-side validation and submit the form.
	 * @param {Event} - the `submit` event
	 */
	ContactForm.prototype.submit = function submit(evt) {
		evt.preventDefault();

		var $invalidFields = this.$fields.filter(this.validate.bind(this));
		if ($invalidFields.length > 0) {
			// Give focus to first invalid field and return
			$invalidFields.first().focus();
			return;
		}
		
		// Form is valid; show spinner on submit button
		this.$submitBtn.addClass('form-submit--spinner');

		// Submit form and perform server-side validation
		$.ajax({
			type: 'POST',
			url: this.$root.attr('action') + '?ajax',
			data: this.$root.serialize(),
			dataType: 'json'
		})
		.done(this.showResult.bind(this, true))
		.fail(this.showResult.bind(this, false))
		.always((function () {
			// Hide spinner
			this.$submitBtn.removeClass('form-submit--spinner');
		}).bind(this));
	};
	
	/**
	 * Validate a field.
	 * This function is used as callback to the `filter` function.
	 * @param {Integer} index - ignored
	 * @param {Element} field - the field element to validate
	 * @return {Boolean} - `true` if the field is invalid; `false` otherwise 
	 */
	ContactForm.prototype.validate = function validate(index, field) {
		var $field = $(field);
		var $errors = $field.nextAll('.form-error');
		var $prevError = $errors.filter(':visible');
		var $newError;
		var isInvalid = false;
		
		// All fields are required => check if blank
		if ($field.val().length === 0) {
			$newError = $errors.filter('.form-error--blank');
		}
		else if ($field[0].id === 'email') {
			// Validate email field
			if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test($field.val())) {
				$newError = $errors.filter('.form-error--email');
			}
		}
		
		if (!$newError) {
			// If no new error, remove invalidity mark-up from field 
			$field.removeAttr('aria-invalid').removeClass('field_invalid');
		}
		
		if ($prevError.length > 0) {
			// Always remove ARIA alert role from previous error 
			$prevError.removeAttr('role');
			
			// If no new error, or new error is not the same as previous error, hide previous error
			if (!$newError || $newError[0] !== $prevError[0]) {
				// Once previous error is hidden, show new error if any
				$prevError.fadeOut(200, this.showError.bind(this, $newError, $field)).attr('hidden', 'hidden');
			}
		} else {
			this.showError($newError, $field);
		}
		
		return !!$newError;
	};
	
	/**
	 * Show client-side validation error and mark field as invalid.
	 * This function does nothing if no error element is provided.
	 * @param {jQuery} $error - the error element to show (optional)
	 * @param {jQuery} $field - the field element to mark as invalid
	 */
	ContactForm.prototype.showError = function showError($error, $field) {
		if ($error) {
			$field.attr('aria-invalid', true).addClass('field_invalid');
			$error.attr('role', 'alert').fadeIn().removeAttr('hidden');
		}
	};
	
	/**
	 * Show form submission result.
	 * @param {Boolean} isSuccess
	 * @param {Object} result (optional if `isSuccess` is `false`)
	 */
	ContactForm.prototype.showResult = function showResult(isSuccess, result) {
		var type = isSuccess ? result.type : 'fail';
		var message = isSuccess ? result.message : GENERIC_ERROR;
		
		// Update result element content and class name
		this.$result.html(message);
		this.$result.removeClass('form-result--success form-result--fail');
		this.$result.addClass('form-result--' + type);
		
		// Show result wrapper and give focus
		this.$resultWrap.fadeIn().removeAttr('hidden').focus();
		
		// Send Analytics event or exception
		if (isSuccess) {
			ga('send', 'event', 'contact form', 'submit', 'success');
		} else {
			ga('send', 'exception', {
				exDescription: 'Form submission error: ' + message,
				exFatal: false
			});
		}
	};
	
	// Register jQuery `contactForm` plugin
	$.fn.contactForm = function contactForm() {
		return this.each(function () {
			new ContactForm(this);
		});
	};
	
}(jQuery));
