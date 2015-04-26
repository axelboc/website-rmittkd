
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


/* ===== Debounced resize event handler ===== */

$.fn.debResize = function (handler) {
	return this.resize((function () {
		var timeout;
		
		return function debounced() {
			var that = this;
			var args = arguments;
			
			if (timeout) {
				clearTimeout(timeout);
			}
			
			timeout = setTimeout(function delayed() {
				handler.apply(that, args);
				timeout = null;
			}, 200);
		};
	}()));
};


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
	
	// Determine best way of getting viewport width
	var widthElem = window;
	var widthProp = "innerWidth";
	if (!(widthProp in widthElem)) {
		widthElem = document.documentElement;
		widthProp = "clientWidth";
	}
	
	var prevSuffix;
	var $lazyImages = $bodyWrap.find("img.lazy-loading");
	
	function lazyLoad() {
		// Compute width of 'body' element in em
		emWidth = widthElem[widthProp] / fontSize;

		// Deduce image filename suffix
		var suffix = emWidth < 50 ? "-" + (emWidth < 30 ? "mob" : "tab") : "";
		
		// If suffix has changed, (re)load images
		if (suffix !== prevSuffix) {
			$lazyImages.each(function () {
				$this = $(this);
				
				// Do not load if image is hidden at this width
				var hiddenUntil = $this.attr("data-hidden-until");
				if (!hiddenUntil || parseInt(hiddenUntil, 10) < emWidth) {
					// Compute and set 'src' attribute
					var src = $this.attr("data-src").replace("-suffix", suffix);
					$this.attr("src", src);
				}
			});
		}
	}
	
	// Lazy-load images now and when window is resized
	lazyLoad();
	$window.debResize(lazyLoad);
	
	
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
	$window.debResize(closeNav);

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
