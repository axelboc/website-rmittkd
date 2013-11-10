$(function () {
	
	var GENERIC_ERROR = "Sorry. Something went wrong on our end.<br>But <strong>please, don't despair!</strong> You can still send us your message on <a href=\"https://www.facebook.com/rmittkd\" class=\"link-blend\">Facebook</a>, and let us know of the issue.";
	
	var $form = $(document.getElementById("contact-form"));
	var $fields = $form.find(".form-field");
	var $errors = $form.find(".form-error");
	var $resultBox = $form.children(".form-result");
	var $resultMessage = $resultBox.children(".form-result-message");
	var $submitBtn = $form.find(".form-submit");
	
	
	// Show client-side validation error and mark field as invalid
	var showError = function ($error, $field) {
		if ($error) {
			$field.attr("aria-invalid", true).addClass("form-field--invalid");
			$error.attr("role", "alert").fadeIn().removeClass("hidden");
		}
	};
	
	// Validate a field
	var validate = function ($field) {
		var $errors = $field.nextAll(".form-error");
		var $newError, $prevError = $errors.filter(":visible");
		var isInvalid = false;
		
		// All fields are required => check if blank
		if ($field.val().length === 0) {
			$newError = $errors.filter(".form-error--blank");
		}
		else if ($field[0].id === "email") {
			// Validate email field
			if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test($field.val())) {
				$newError = $errors.filter(".form-error--email");
			}
		}
		
		if (!$newError) {
			// If no new error, remove invalidity mark-up from field 
			$field.removeAttr("aria-invalid").removeClass("form-field--invalid");
		}
		
		if ($prevError.length > 0) {
			// Always remove ARIA alert role from previous error 
			$prevError.removeAttr("role");
			
			// If no new error, or new error is not the same as previous error, hide previous error
			if (!$newError || $newError[0] !== $prevError[0]) {
				$prevError.fadeOut(200, function () {
					// Once previous error is hidden, show new error if any
					showError($newError, $field);
				}).addClass("hidden");
			}
		} else {
			showError($newError, $field);
		}
		
		return !$newError;
	};
	
	// Validate fields on blur
	$fields.blur(function () {
		validate($(this));
	});
	
	
	// Show form submission result
	var showResult = function (messageClass, message) {
		$resultMessage.html(message);
		$resultBox.removeClass("form-result--fail form-result--success").addClass("form-result--" + messageClass);
		$resultBox.fadeIn().removeClass("hidden").focus();
	};
	
	// Re-validate all fields and submit form via Ajax
	$form.submit(function (evt) {
		evt.preventDefault();
		
		var $firstInvalid;
		
		$fields.each(function () {
			var $this = $(this);
			if (!validate($this) && !$firstInvalid) {
				$firstInvalid = $this;
			}
		});

		if ($firstInvalid) {
			// Give focus to first invalid field
			$firstInvalid.focus();
		} else {
			// Show spinner on submit button
			$submitBtn.addClass("form-submit--spinner");
			
			// Perform server-side validation
			$.ajax({
				type: "POST",
				url: $form.attr("action"),
				data: $form.serialize(),
				dataType: "json",
				success: function (result) {
					if (result instanceof Array && result[0].status === "sent") {
						showResult("success", "<strong>Thank you!</strong> Your message has been sent. We'll get in touch with you as soon as possible.");
					} else {
						showResult("fail", result.message ? result.message : GENERIC_ERROR);
					}
				},
				error: function () {
					showResult("fail", GENERIC_ERROR);
				},
				complete: function () {
					// Hide spinner
					$submitBtn.removeClass("form-submit--spinner");
				}
			});
		}
	});
	
});
