
$(function () {

	var $instr = $(document.getElementById("instructors"));
	var $profiles = $instr.find(".instr-profile");
	var $arrowPrev = $instr.find(".instr-arrow-prev");
	var $arrowNext = $instr.find(".instr-arrow-next");
	var $dots = $instr.find(".instr-dot");

	// Initialise length and position of carousel
	var carouselLen = $profiles.length;
	var carouselPos = 1;
	var updating = false;
	
	// Save current profile
	var $prevProfile = $profiles.eq(carouselPos);
	

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
		if (carouselPos === carouselLen - 1) {
			setArrowState($arrowNext, false);
		}
	};
	
	var updateDots = function () {
		// Deselect all dots
		$dots.attr("aria-selected", false).removeClass("instr-dot-selected");
		// Select new dot
		$dots.eq(carouselPos).attr("aria-selected", true).addClass("instr-dot-selected");
	};
	

	/**
	 * Update the carousel.
	 */
	var updateCarousel = function (animate) {
		updateArrows();
		updateDots();
		
		// Get new visible profile
		var $newProfile = $profiles.eq(carouselPos);

		// Fade out previous profile and wait for animation to complete
		$prevProfile.fadeOut({
			duration: 100,
			queue: true,
			complete: function () {
				// Mark previous profile as accessibly hidden and hide
				$prevProfile.attr("aria-hidden", true).addClass("hidden");
	
				// Fade in new profile and wait for animation to complete
				$newProfile.fadeIn({
					duration: 400,
					queue: true,
					complete: function () {
						// Mark new profile as accessibly visible and show
						$newProfile.attr("aria-hidden", false).removeClass("hidden");
						
						// Set focus to new profile
						$newProfile.focus();
						
						// Save new profile
						$prevProfile = $newProfile;
						
						updating = false;
					}
				});
			}
		});
	};
	

	// Handle click on previous arrow
	$arrowPrev.click(function (evt) {
		// Prevent going before the first month
		if (!updating && carouselPos > 0) {
			updating = true;
			$arrowPrev.blur();
			carouselPos--;
			updateCarousel();
			
			// Send Analytics event
			//ga('send', 'event', 'arrow left', 'click', 'instructors slider');
		}
		
		evt.preventDefault();
		return false;
	});

	// Handle click on next arrow
	$arrowNext.click(function (evt) {
		// Prevent going past the last month
		if (!updating && carouselPos < carouselLen - 1) {
			updating = true;
			$arrowNext.blur();
			carouselPos++;
			updateCarousel();
			
			// Send Analytics event
			//ga('send', 'event', 'arrow right', 'click', 'instructors slider');
		}
		
		evt.preventDefault();
		return false;
	});
	
	// Handle click on dots
	$dots.click(function (evt) {
		if (!updating) {
			updating = true;
			$newDot = $(evt.target);
			$newDot.blur();
			carouselPos = $dots.index($newDot);
			updateCarousel();
		
			// Send Analytics event
			//ga('send', 'event', 'dot ' + carouselPos, 'click', 'instructors slider');
		}
		
		evt.preventDefault();
		return false;
	});
	
});

