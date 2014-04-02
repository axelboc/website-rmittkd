
$(function () {
	
	var $cal = $(document.getElementById("calendar"));
	var $monthsCont = $cal.children(".cal-months");
	var $months = $monthsCont.children(".cal-month");
	var $arrowPrev = $cal.children(".cal-arrow--prev");
	var $arrowNext = $cal.children(".cal-arrow--next");
	var carouselLen = $months.length;
	
	
	/**
	 * Test 3D transform support.
	 * From: http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
	 */
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
	
	// Add 'no3d' class to calendar if 3D transforms are not supported
	if (!has3d) {
		$cal.addClass("no3d");
	}

	// Update arrows rights away
	updateArrows($months.filter(".cal-month--current").index());

	/**
	 * Set the state (enabled or disabled) of an arrow.
	 * @param {Object} $arrow The arrow of which to set the state, as a jQuery object. 
	 * @param {Boolean} enable Whether to enable (true) or disable (false) the arrow. 
	 */
	function setArrowState($arrow, enable) {
		$arrow.attr("aria-disabled", !enable);
		if (enable) {
			$arrow.removeClass("arrow-disabled");
			$arrow.removeAttr("tabindex");
		} else {
			$arrow.addClass("arrow-disabled");
			$arrow.attr("tabindex", "-1");
		}
	}

	/**
	 * Update the previous and next arrows of the carousel, according to its current position. 
	 */
	function updateArrows(index) {
		// Enable both arrows
		setArrowState($arrowPrev, true);
		setArrowState($arrowNext, true);

		// If at start, disable prev arrow
		if (index === 1) {
			setArrowState($arrowPrev, false);
		}
		// If at end, disable next arrow
		if (index + 1 === carouselLen) {
			setArrowState($arrowNext, false);
		}
	}
	
	
	/**
	 * Update the position of the carousel by re-arranging classes in between the 'cal-month' elements.
	 * @param {Boolean} toLeft True to move to the left; false to move to the right.
	 */
	function moveCarousel(toLeft) {
		// Find the index of the current month
		var index = $months.filter(".cal-month--current").index();
		
		if (toLeft) {
			$months.eq(index - 2).toggleClass("cal-month--before cal-month--previous").attr("aria-hidden", false);
			$months.eq(index - 1).toggleClass("cal-month--previous cal-month--current");
			$months.eq(index).toggleClass("cal-month--current cal-month--after").attr("aria-hidden", true);
			index--;
		} else {
			$months.eq(index + 1).toggleClass("cal-month--after cal-month--current").attr("aria-hidden", false);
			$months.eq(index).toggleClass("cal-month--current cal-month--previous");
			$months.eq(index - 1).toggleClass("cal-month--previous cal-month--before").attr("aria-hidden", true);
			index++;
		}
		
		updateArrows(index);
	}
	
	

	// Handle click on previous arrow
	$arrowPrev.click(function (evt) {
		evt.preventDefault();
		$arrowPrev.blur();
		
		if (!$arrowPrev.hasClass("arrow-disabled")) {
			// Move carousel to the left
			moveCarousel(true);
			
			// Send Analytics event
			//ga('send', 'event', 'arrow left', 'click', 'calendar');
		}
	});

	// Handle click on next arrow
	$arrowNext.click(function (evt) {
		evt.preventDefault();
		$arrowNext.blur();
		
		if (!$arrowNext.hasClass("arrow-disabled")) {
			// Move carousel to the left
			moveCarousel(false);
			
			// Send Analytics event
			//ga('send', 'event', 'arrow left', 'click', 'calendar');
		}
	});
	
});

