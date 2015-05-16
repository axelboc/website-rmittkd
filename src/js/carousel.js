
/**
 * Carousel plugin.
 */
(function ($) {
	'use strict';
	
	/**
	 * Carousel.
	 * @param {Element} root
	 * @param {Boolean} has3d - whether the browser supports 3D transforms
	 */
	function Carousel(root, has3d) {
		this.root = root;
		this.$root = $(root);
		this.has3d = has3d;
		
		this.$container = this.$root.find('.car-container');
		this.$slides = this.$container.find('.car-slide').attr('tabindex', -1);
		this.$prevBtn = this.$root.find('.car-prev');
		this.$nextBtn = this.$root.find('.car-next');
		this.$dots = this.$root.find('.car-dot');
		
		this.position = this.$container.data('position');
		this.maxPosition = this.$container.data('max-position') || this.$slides.length - 1;
		
		// Update navigation buttons
		this.updateBtns();
		
		// Previous/next buttons
		this.$prevBtn.click(this.previous.bind(this));
		this.$nextBtn.click(this.next.bind(this));
		
		// Navigation dots
		this.$dots.each(function (index, dot) {
			$(dot).click(this.update.bind(this, index));
		}.bind(this));
		
		// Keyboard arrows
		$(document).keydown(onKeyDown(37, this.previous, this));
		$(document).keydown(onKeyDown(39, this.next, this));
	}
	
	Carousel.prototype.previous = function previous() {
		if (this.position > 0) {
			this.update(this.position - 1);
		}
	};
	
	Carousel.prototype.next = function next() {
		if (this.position < this.maxPosition) {
			this.update(this.position + 1);
		}
	};
	
	Carousel.prototype.update = function update(newPos) {
		if (!this.updating && this.position !== newPos) {
			// Show all the slides
			this.$slides.attr('aria-hidden', false);
			
			// Save and update position
			this.position = newPos;
			this.$container.attr('data-position', this.position);
			
			// Update navigation buttons
			this.updateBtns();
			
			// Wait for transition to end
			this.waitForIt(function updated() {
				// Show/hide the slides and give focus to current slide
				this.$slides.attr('aria-hidden', true);
				this.$slides.eq(this.position).attr('aria-hidden', false).focus();
			}.bind(this));
		}
	};
	
	Carousel.prototype.updateBtns = function updateBtns() {
		enableButton(this.$prevBtn, this.position > 0);
		enableButton(this.$nextBtn, this.position < this.maxPosition);
		this.$dots.attr('aria-selected', false).eq(this.position).attr('aria-selected', true);
	};
	
	/**
	 * The carousel has been updated.
	 * Wait for the transition to end and call a callback function.
	 * @param {Function} cb
	 */
	Carousel.prototype.waitForIt = function waitForIt(cb) {
		if (this.has3d) {
			// Remove any existing listener and add a new one 
			this.$container.off('transitionend').one('transitionend', cb);
		} else {
			cb();
		}
	};
	
	/**
	 * Return a keyboard event handler that calls a function when a specific key is pressed.
	 * @param {Interger} keyCode
	 * @param {Function} func
	 * @param {Object} scope
	 * @return {Function}
	 */
	function onKeyDown(keyCode, func, scope) {
		return function (evt) {
			if (evt.which === keyCode) {
				func.call(scope, evt);
			}
		};
	}
	
	/**
	 * Enable or disable a button.
	 * @param {Object} $btn
	 * @param {Boolean} enable - `true` to enable; `false` to disable. 
	 */
	function enableButton($btn, enable) {
		if (enable) {
			$btn.removeAttr('disabled');
		} else {
			$btn.attr('disabled', 'disabled');
		}
	}
	
	// Register jQuery `carousel` plugin
	$.fn.carousel = function carousel(has3d) {
		this.each(function () {
			new Carousel(this, has3d);
		});
	};
	
}(jQuery));
