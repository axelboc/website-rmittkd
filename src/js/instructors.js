
$(function () {
	"use strict";

	var $instr = $(document.getElementById("instructors"));
	if ($instr.length === 0) {
		return;
	}
	
	var $document = $(document);
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
	
	
	/**
	 * Handle an event that aims at moving the carousel to the previous instructor.
	 * @param {Event} evt
	 */
	function previousInstr(evt) {
		evt.preventDefault();
		
		// Prevent going before the first instructor
		if (!updating && carouselPos > 0) {
			updating = true;
			$arrowPrev.blur();
			carouselPos--;
			updateCarousel();
		}
	}
	
	/**
	 * Handle an event that aims at moving the carousel to the next instructor.
	 * @param {Event} evt
	 */
	function nextInstr(evt) {
		evt.preventDefault();
		
		// Prevent going past the last instructor
		if (!updating && carouselPos < carouselLen - 1) {
			updating = true;
			$arrowNext.blur();
			carouselPos++;
			updateCarousel();
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
	$arrowPrev.click(previousInstr);
	$arrowNext.click(nextInstr);
	$document.keydown(onKeyDown(previousInstr, 37));
	$document.keydown(onKeyDown(nextInstr, 39));
	
	// Handle click on dots
	$dots.click(function (evt) {
		evt.preventDefault();
		
		if (!updating) {
			updating = true;
			$newDot = $(evt.target);
			$newDot.blur();
			carouselPos = $dots.index($newDot);
			updateCarousel();
		}
	});
	
});
