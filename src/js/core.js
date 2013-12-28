
// Global (accessed by calendar.js)
var emWidth;

$(function () {
	
	var $window = $(window);
	var $html = $(document.documentElement);
	var $body = $(document.body);
	var $bodyWrap = $body.children(".body-wrap");
	
	
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
			// Start measuring load time for Analytics
			var startTime = new Date().getTime();
			
			// Build and set 'src' attribute
			var src = $this.attr("data-src").replace("-suffix", suffix);
			$this.attr("src", src);
			
			// When image is loaded, send load time to Analytics
			$this.load(function () {
				var loadTime = (new Date().getTime()) - startTime;
				ga('send', 'timing', src, 'Load Image', loadTime);
			});
		}
	});
	
	
	/* ===== Off-canvas responsive navigation ===== */
	
	var nav = document.getElementById("nav");
	var $nav = $(nav);
	var $navTrigger = $(document.getElementById("nav-trigger"));
	
	var navVisible = false;
	
	// Open navigation
	$navTrigger.click(function (evt) {
		$bodyWrap.animate({
			left: "14em"
		}, function() {
			$nav.focus();
		});
		
		navVisible = true;
		$html.addClass("noscroll");
		$nav.addClass("nav-visible");
		$nav.attr("aria-hidden", false);
		
		// Send Analytics event
		ga('send', 'event', 'open', 'click', 'mobile nav');
		
		evt.preventDefault();
		return false;
	});

	// Close navigation
	$nav.children(".nav-close").click(function (evt) {
		$bodyWrap.animate({
			left: 0
		}, function() {
			$nav.removeClass("nav-visible");
			$navTrigger.focus();
		});
		
		navVisible = false;
		$html.removeClass("noscroll");
		$nav.attr("aria-hidden", true);
		
		// Send Analytics event
		ga('send', 'event', 'close', 'click', 'mobile nav');
		
		evt.preventDefault();
		return false;
	});
	
	
	// Manage change of navigation type when window is resized
	var isOffCanvas = $nav.css("position") === "absolute";
	
	$window.resize(function () {
		var newPos = $nav.css("position");
		
		if (isOffCanvas && newPos !== "absolute") {
			// Switch to normal nav
			isOffCanvas = false;
			navVisible = false;
			
			$html.removeClass("noscroll");
			$bodyWrap.css("left", 0);
			$nav.attr("aria-hidden", false);
			$nav.removeClass("nav-visible");
			
			// Send Analytics event
			ga('send', 'event', 'off', 'resize', 'mobile nav');
			
		} else if (!isOffCanvas && newPos === "absolute") {
			// Switch to responsive nav
			isOffCanvas = true;
			$nav.attr("aria-hidden", true);
			
			// Send Analytics event
			ga('send', 'event', 'on', 'resize', 'mobile nav');
		}
	});
	

	// Keep focus inside navigation when it is visible
	$(document).on("focusin", function (evt) {
		if (navVisible && evt.target !== nav && !$.contains(nav, evt.target)) {
			$nav.focus();
			// Prevent scrolling due to focus events
			window.scrollTo(0, 0);
		}
	});
	
});
