
$(function () {
	
	var $body = $("body");
	var $bodyWrap = $body.children(".body-wrap");
	
	/* ===== Lazy-loading of images ===== */
	
	// Get default font-size
	var fontSize = $("html").css("font-size");
	try {
		fontSize = parseInt(fontSize.substr(0, fontSize.length - 2), 10);
	} catch (e) {
		fontSize = 16;
	}
	
	// Calculate current width of 'body' element in em
	var emWidth = $body.width() / fontSize;
	// Deduce image filename suffix
	var suffix = emWidth < 50 ? "-" + (emWidth < 30 ? "mob" : "tab") : "";

	// Load images
	$bodyWrap.find("img.lazy-loading").each(function () {
		$this = $(this);
		$this.toggleClass("lazy-loading respimg-fit");
		
		// Set 'src' attribute (except for contact page image on mobile)
		if (emWidth > 30 || !$this.hasClass("contact-image")) {
			$this.attr("src", $this.attr("data-src").replace("-suffix", suffix));
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
		$body.addClass("noscroll");
		$nav.addClass("nav-visible");
		$nav.attr("aria-hidden", false);
		
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
		$body.removeClass("noscroll");
		$nav.attr("aria-hidden", true);
		
		evt.preventDefault();
		return false;
	});
	
	
	// Manage change of navigation type when window is resized
	var isOffCanvas = $nav.css("position") === "absolute";
	
	$(window).resize(function () {
		var newPos = $nav.css("position");
		
		if (isOffCanvas && newPos !== "absolute") {
			// Switch to normal nav
			isOffCanvas = false;
			navVisible = false;
			
			$body.removeClass("noscroll");
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
			$nav.focus();
			// Prevent scrolling due to focus events
			window.scrollTo(0, 0);
		}
	});
	
});
