
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
	var $htmlBody = $html.add('body');
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
	var computeEmWidth = function () {
		emWidth = widthElem[widthProp] / fontSize;
	};
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
	
	
	/* ===== Off-canvas responsive navigation ===== */
	
	var nav = document.getElementById("nav");
	var $nav = $(nav);
	var $navTrigger = $(document.getElementById("nav-trigger"));
	
	var navVisible = false;
	
	// Open navigation
	$navTrigger.click(function (evt) {
		evt.preventDefault();

		$iframes.attr('tabindex', -1);
		
		$bodyWrap.animate({
			left: "14em"
		}, function() {
			$nav.focus();
		});
		
		navVisible = true;
		$nav.addClass("nav-visible");
		$nav.attr("aria-hidden", false);
	});

	// Close navigation
	$nav.children(".nav-close").click(function (evt) {
		evt.preventDefault();

		$iframes.attr('tabindex', 0);
		
		$bodyWrap.animate({
			left: 0
		}, function() {
			$nav.removeClass("nav-visible");
			$navTrigger.focus();
		});
		
		navVisible = false;
		$nav.attr("aria-hidden", true);
	});
	
	
	// Manage change of navigation type when window is resized
	var isOffCanvas = $nav.css("position") === "absolute";
	
	$window.resize(function () {
		var newPos = $nav.css("position");
		
		if (isOffCanvas && newPos !== "absolute") {
			// Switch to normal nav
			isOffCanvas = false;
			navVisible = false;
			
			$bodyWrap.css("left", 0);
			$nav.attr("aria-hidden", false);
			$nav.removeClass("nav-visible");
			
		} else if (!isOffCanvas && newPos === "absolute") {
			// Switch to responsive nav
			isOffCanvas = true;
			$nav.attr("aria-hidden", true);
		}
	});
	

	// Keep focus inside navigation when it is visible
	$(document).on("focusin", function (evt) {
		if (navVisible && evt.target !== nav && !$.contains(nav, evt.target)) {
			// Return focus to navigation
			$nav.focus();
			
			// Prevent scrolling due to focus events
			$htmlBody.scrollTop(0).scrollLeft(0);
		}
	});
	
});
