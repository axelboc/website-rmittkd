
(function (win, doc, $, undefined) {
	'use strict';
	
	// Track JS errors
	win.addEventListener('error', function (evt) {
		ga('send', 'exception', {
			'exDescription': 'JS error in ' + evt.filename + ', line #' + evt.lineno + ': ' + evt.message,
			'exFatal': true
		});
	});

	$(function () {
		// Track Ajax errors
		$(doc).ajaxError(function (evt, request, settings, error) {
			ga('send', 'exception', {
				'exDescription': 'Ajax error for ' + settings.url + ': ' + evt.result,
				'exFatal': true
			});
		});

		// Detect support for 3D transforms; add class to html element if not supported
		var has3d = detect3d();
		if (!has3d) {
			$('html').addClass('no3d');
		}

		// Initialise plugins
		$('.lazy-loading').lazyLoad();
		$(doc.getElementById('nav')).mobileNav(has3d);
		$(doc.getElementById('calendar')).carousel(has3d);
		$(doc.getElementById('instructors')).carousel(has3d);
		$(doc.getElementById('facebook-feed')).facebookFeed();
		$(doc.getElementById('contact-form')).contactForm();
		$(doc.getElementById('help-btn')).groupToggle('.admin-help');
	});
	
	/**
	 * Detect support for 3D transforms.
	 * From: http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
	 */
	function detect3d() {
		var has3d;
		var el = doc.createElement('div');
		doc.body.insertBefore(el, null);

		if (el.style.transform !== undefined) {
			el.style.transform = 'translate3d(1px, 1px, 1px)';
			has3d = win.getComputedStyle(el).getPropertyValue('transform');
		}

		doc.body.removeChild(el);
		return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
	}

}(window, document, jQuery));
