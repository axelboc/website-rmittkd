
$(function () {
	
	var $cal = $(document.getElementById("calendar"));
	if ($cal.length === 0) {
		return;
	}
	
	var $document = $(document);
	var $monthsCont = $cal.children(".cal-months");
	var $months = $monthsCont.children(".cal-month");
	var $arrowPrev = $cal.children(".cal-arrow--prev");
	var $arrowNext = $cal.children(".cal-arrow--next");
	var carouselLen = $months.length;
	

	// Update arrows right away
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
	var timeout;
	function moveCarousel(toLeft) {
		// Find the index of the current month
		var index = $months.filter(".cal-month--current").index();
		var $current;
		
		if (toLeft) {
			$months.eq(index - 2).toggleClass("cal-month--before cal-month--previous").attr("aria-hidden", false);
			$current = $months.eq(index - 1).toggleClass("cal-month--previous cal-month--current");
			$months.eq(index).toggleClass("cal-month--current cal-month--after").attr("aria-hidden", true);
			index--;
		} else {
			$current = $months.eq(index + 1).toggleClass("cal-month--after cal-month--current").attr("aria-hidden", false);
			$months.eq(index).toggleClass("cal-month--current cal-month--previous");
			$months.eq(index - 1).toggleClass("cal-month--previous cal-month--before").attr("aria-hidden", true);
			index++;
		}
		
		if (timeout) {
			clearTimeout(timeout);
		}
		
		// Wait for the duration of the transition and set focus on new current month
		timeout = setTimeout(function () {
			$current.focus();
		}, 400);
		
		updateArrows(index);
	}
	
	/**
	 * Handle an event that aims at moving the carousel to the previous month.
	 * @param {Event} evt
	 */
	function previousMonth(evt) {
		evt.preventDefault();
		if (!$arrowPrev.hasClass("arrow-disabled")) {
			// Move carousel to the left
			moveCarousel(true);
		}
	}
	
	/**
	 * Handle an event that aims at moving the carousel to the next month.
	 * @param {Event} evt
	 */
	function nextMonth(evt) {
		evt.preventDefault();
		if (!$arrowNext.hasClass("arrow-disabled")) {
			// Move carousel to the left
			moveCarousel(false);
		}
	}
	
	/**
	 * Returns a keyboard event handler that calls a given function when a specific key is pressed.
	 * @param {Function} func
	 * @param {Interger} keyCode
	 * @return {Function}
	 */
	function onKeyDown(func, keyCode) {
		return function (evt) {
			if (evt.which === keyCode) {
				func(evt);
			}
		};
	}

	// Register event listeners
	$arrowPrev.click(previousMonth);
	$arrowNext.click(nextMonth);
	$document.keydown(onKeyDown(previousMonth, 37));
	$document.keydown(onKeyDown(nextMonth, 39));
	
});
