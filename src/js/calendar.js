
$(function () {
	
	var $cal = $(document.getElementById("calendar"));
	var $monthsCont = $cal.children(".cal-months-wrapper").children(".cal-months");
	var $months = $monthsCont.children(".cal-month");
	var $arrowPrev = $cal.children(".cal-arrow-prev");
	var $arrowNext = $cal.children(".cal-arrow-next");
	
	// Get current month element
	var now = new Date();
	var currentMonth = $months.filter(".cal-month-" + now.getFullYear() + "-" + (now.getMonth() + 1));
	
	// Initialise length and position of carousel
	var carouselLen = $months.length;
	var carouselPos = $months.index(currentMonth);

	
	/**
	 * Test prefix-free 3d transform support.
	 * From: http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
	 */
	var has3d = (function () {
		var has3d;
		var el = document.createElement('div');
		var transforms = {
			webkitTransform: "-webkit-transform",
			transform: "transform"
		};
		
		document.body.insertBefore(el, null);
		
		for (var t in transforms) {
			if (typeof el.style[t] !== "undefined") {
				el.style[t] = "translate3d(1px, 1px, 1px)";
				has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
			}
		}
		
		document.body.removeChild(el);
		
		return (typeof has3d !== "undefined" && has3d.length > 0 && has3d !== "none");
	}());

	
	/**
	 * Number of months visible to the user in the carousel.
	 */
	var inView;
	var updateInView = function () {
		// When body width is less than 40em, calendar has one column; otherwise, it has two.
		inView = emWidth < 40 ? 1 : 2;
		
		// If 2 months in view, ensure the carousel's position is not the last month
		if (inView === 2 && (carouselPos === carouselLen - 1)) {
			carouselPos--;
		}
	};
	

	/**
	 * Set the state (enabled or disabled) of an arrow.
	 * @param {Object} $arrow The arrow of which to set the state, as a jQuery object. 
	 * @param {Boolean} enable Whether to enable (true) or disable (false) the arrow. 
	 */
	var setArrowState = function ($arrow, enable) {
		$arrow.attr("aria-disabled", !enable);
		if (enable) {
			$arrow.removeClass("arrow-disabled");
			$arrow.removeAttr("tabindex");
		} else {
			$arrow.addClass("arrow-disabled");
			$arrow.attr("tabindex", "-1");
		}
	};

	/**
	 * Update the previous and next arrows of the carousel, according to its current position. 
	 */
	var updateArrows = function () {
		// Enable both arrows
		setArrowState($arrowPrev, true);
		setArrowState($arrowNext, true);

		// If at start, disable prev arrow
		if (carouselPos === 0) {
			setArrowState($arrowPrev, false);
		}
		// If at end, disable next arrow
		if ((carouselPos + inView) === carouselLen) {
			setArrowState($arrowNext, false);
		}
	};
	
	
	/**
	 * Update the carousel.
	 * @param {Boolean} animate Whether to animate to the new position. 
	 */
	var updateCarousel = function (animate) {
		updateInView();
		updateArrows();
		
		// Mark all months as accessibly hidden, then unmark the ones that are now visible
		$months.attr("aria-hidden", true);
		$months.slice(carouselPos, carouselPos + inView).attr("aria-hidden", false);

		// Calculate new position:
		// - when 1 month is in view, it is a multiple of 100%
		// - when 2 months are in view, it is a multiple of 50%
		var newPos = -carouselPos * 100 / inView;
		
		if (has3d) {
			$monthsCont.css("-webkit-transform", "translate3d(" + newPos * inView / carouselLen + "%, 0, 0)");
			$monthsCont.css("transform", "translate3d(" + newPos * inView / carouselLen + "%, 0, 0)");
		} else {
			// Apply new position to left margin with or whithout animation
			if (animate) {
				$monthsCont.stop();
				$monthsCont.animate({
					"margin-left": newPos + "%"
				}, 600, function () {
					$months.get(carouselPos).focus();
				});
			} else {
				$monthsCont.css("margin-left", newPos + "%");
			}
		}
	};
	
	
	// Update once
	updateCarousel(false);
	
	// Update on resize
	$(window).resize(function () {
		updateCarousel(false);
	});
	

	// Handle click on previous arrow
	$arrowPrev.click(function (evt) {
		// Prevent going before the first month
		if (carouselPos > 0) {
			carouselPos--;
			$arrowPrev.blur();
			updateCarousel(true);
			
			// Send Analytics event
			//ga('send', 'event', 'arrow left', 'click', 'calendar');
		}
		
		evt.preventDefault();
		return false;
	});

	// Handle click on next arrow
	$arrowNext.click(function (evt) {
		// Prevent going past the last month
		if (carouselPos + inView < carouselLen) {
			carouselPos++;
			$arrowNext.blur();
			updateCarousel(true);
			
			// Send Analytics event
			//ga('send', 'event', 'arrow right', 'click', 'calendar');
		}
		
		evt.preventDefault();
		return false;
	});
	
});

