
/**
 * Group Toggle plugin.
 * Used on the admin interface to show/hide the help blocks.
 */
(function ($) {
	'use strict';
	
	/**
	 * Group Toggle.
	 * @param {Element} root - the trigger <button> element
	 * @param {String} targetSelector - selector to use to find the targets to toggle
	 */
	function GroupToggle(root, targetSelector) {
		this.root = root;
		this.$root = $(root);
		
		this.showText = this.$root.text();
		this.hideText = this.showText.replace('Show', 'Hide');
		this.targetsVisible = false;
		
		// Find the targets
		this.$targets = $(targetSelector);
		
		// Toggle on click
		this.$root.click(this.toggle.bind(this));
	}
	
	GroupToggle.prototype.toggle = function toggle() {
		this.$targets.slideToggle(300);
		
		this.$root.blur();
		this.targetsVisible = !this.targetsVisible;
		
		if (this.targetsVisible) {
			this.$root.text(this.hideText);
			this.$targets.removeAttr('hidden');
		} else {
			this.$root.text(this.showText);
			this.$targets.attr('hidden', 'hidden');
		}
	};
	
	// Register jQuery `groupToggle` plugin
	$.fn.groupToggle = function groupToggle(targetSelector) {
		this.each(function () {
			new GroupToggle(this, targetSelector);
		});
	};
	
}(jQuery));
