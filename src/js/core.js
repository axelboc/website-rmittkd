
// Global (accessed by calendar.js)
var emWidth;


/* ===== Exception tracking ===== */

$(function () {
	
	// Track JS errors
	window.addEventListener('error', function(evt) {
		ga('send', 'exception', {
			'exDescription': 'JS error in ' + evt.filename + ', line #' + evt.lineno + ': ' + evt.message,
			'exFatal': true
		});
	});

	// Track Ajax errors
	$(document).ajaxError(function(evt, request, settings, error) {
		console.log('test');
		ga('send', 'exception', {
			'exDescription': 'Ajax error for ' + settings.url + ': ' + evt.result,
			'exFatal': true
		});
	});
	
});


/* ===== Core initialisation and features ===== */

$(function () {
	
	var $window = $(window);
	var $html = $('html');
	var $body = $('body');
	var $bodyWrap = $('.body-wrap');
	var $iframes = $('iframe');
	

	/* ===== Lazy-loading of images ===== */
	
	// Get default font-size
	var fontSize = $html.css("font-size");
	fontSize = parseInt(fontSize.substr(0, fontSize.length - 2), 10);
	if (isNaN(fontSize)) {
		fontSize = 16;
	}
	
	// Determine way of getting viewport width
	var widthElem = window;
	var widthProp = "innerWidth";
	if (!(widthProp in widthElem)) {
		widthElem = document.documentElement;
		widthProp = "clientWidth";
	}
	
	// Calculate current width of 'body' element in em
	function computeEmWidth() {
		emWidth = widthElem[widthProp] / fontSize;
	}
	
	// Compute now and when window is resized
	computeEmWidth();
	$window.resize(computeEmWidth);
	
	// Deduce image filename suffix
	var suffix = emWidth < 50 ? "-" + (emWidth < 30 ? "mob" : "tab") : "";

	// Load images
	$bodyWrap.find("img.lazy-loading").each(function () {
		$this = $(this);
		
		// Skip contact page image on mobile
		if (emWidth > 30 || !$this.hasClass("contact-image")) {
			// Build and set 'src' attribute
			var src = $this.attr("data-src").replace("-suffix", suffix);
			$this.attr("src", src);
		}
	});
	
	
	/* ===== 3D-transform feature detection ===== */
	
	// From: http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
	var has3d = (function () {
		var has3d;
		var el = document.createElement('div');
		var transforms = {
			transform: "transform"
		};
		
		document.body.insertBefore(el, null);
		
		if (typeof el.style.transform !== "undefined") {
			el.style.transform = "translate3d(1px, 1px, 1px)";
			has3d = window.getComputedStyle(el).getPropertyValue("transform");
		}
		
		document.body.removeChild(el);
		
		return (typeof has3d !== "undefined" && has3d.length > 0 && has3d !== "none");
	}());
	
	// Add class to html element if not supported
	if (!has3d) {
		$html.addClass("no3d");
	}
	
	
	/* ===== Off-canvas mobile navigation ===== */
	
	var navVisible = false;
	var nav = document.getElementById("nav");
	var $nav = $(nav);
	
	function openNav() {
		if (!navVisible) {
			$nav.attr("aria-hidden", false);
			$bodyWrap.addClass("body-wrap_nav");
			$iframes.attr('tabindex', -1);
			
			navToggled(function navOpened() {
				navVisible = true;
				$nav.focus();
			});
		}
	}
	
	function closeNav() {
		if (navVisible) {
			$bodyWrap.removeClass("body-wrap_nav");
			$iframes.attr('tabindex', 0);
			
			navToggled(function navClosed() {
				navVisible = false;
				$body.attr("tabindex", -1).focus();
				$nav.attr("aria-hidden", true);
			});
		}
	}
	
	function navToggled(cb) {
		if (has3d) {
			$bodyWrap.one('transitionend', cb);
		} else {
			cb();
		}
	}
	
	// Open/close buttons
	$(document.getElementById("nav-trigger")).click(openNav);
	$nav.find(".nav-close").click(closeNav);
	
	// Close off-canvas navigation when window is resized
	$window.resize(closeNav);

	// Keep focus inside navigation when it is visible
	$(document).on("focusin", function (evt) {
		if (navVisible && evt.target !== nav && !$.contains(nav, evt.target)) {
			// Return focus to navigation
			$nav.focus();
			
			// Prevent scrolling due to focus events
			$html.add($body).scrollTop(0).scrollLeft(0);
		}
	});
	
});
