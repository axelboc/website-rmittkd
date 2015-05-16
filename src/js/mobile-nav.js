
/**
 * Mobile navigation plugin.
 */
(function (doc, $) {
	'use strict';
	
	/**
	 * Mobile navigation.
	 * @param {Element} root - the <nav> element
	 * @param {Boolean} has3d - whether the browser supports 3D transforms
	 */
	function MobileNav(root, has3d) {
		this.root = root;
		this.$root = $(root);

		this.$scrollable = $('html, body');
		this.$bodyWrap = $('.body-wrap');
		this.$iframes = this.$bodyWrap.find('iframe');
		
		this.has3d = has3d;
		this.navVisible = false;
		
		// Open/close buttons
		$(doc.getElementById('nav-trigger')).click(this.openNav.bind(this));
		this.$root.find('.nav-close').click(this.closeNav.bind(this));
		
		// Close off-canvas navigation when window is resized
		$(window).debResize(this.closeNav.bind(this));
		
		// Keep focus inside navigation when it is visible
		$(doc).on("focusin", function (evt) {
			if (this.navVisible && evt.target !== this.root && !$.contains(this.root, evt.target)) {
				// Return focus to navigation
				this.$root.focus();

				// Prevent scrolling due to focus events
				this.$scrollable.scrollTop(0).scrollLeft(0);
			}
		}.bind(this));
	}
	
	/**
	 * Open the navigation.
	 */
	MobileNav.prototype.openNav = function openNav() {
		if (!this.navVisible) {
			this.$root.attr("aria-hidden", false);
			this.$bodyWrap.addClass("body-wrap_nav");
			this.$iframes.attr('tabindex', -1);
			
			this.navToggled(function navOpened() {
				this.navVisible = true;
				this.$root.focus();
			}.bind(this));
		}
	};
	
	/**
	 * Close the navigation.
	 */
	MobileNav.prototype.closeNav = function closeNav() {
		if (this.navVisible) {
			this.$bodyWrap.removeClass("body-wrap_nav");
			this.$iframes.attr('tabindex', 0);
			
			this.navToggled(function navClosed() {
				this.navVisible = false;
				$(doc.documentElement).attr("tabindex", -1).focus();
				this.$root.attr("aria-hidden", true);
			}.bind(this));
		}
	};
	
	/**
	 * The navigation has been opened or closed.
	 * Wait for the transition to end and call a callback function.
	 * @param {Function} cb
	 */
	MobileNav.prototype.navToggled = function navToggled(cb) {
		if (this.has3d) {
			this.$bodyWrap.one('transitionend', cb);
		} else {
			cb();
		}
	};
	
	// Register jQuery `mobileNav` plugin
	$.fn.mobileNav = function mobileNav(has3d) {
		this.each(function () {
			new MobileNav(this, has3d);
		});
	};
	
}(document, jQuery));
