
/**
 * Image lazy-loading plugin.
 */
(function ($) {
	'use strict';
	
	var ROOT_FONT_SIZE = 16;
	
	var TAB_WDITH = 30;
	var DESK_WIDTH = 50;
	
	var MOB_SUFFIX = '-mob';
	var TAB_SUFFIX = '-tab';
	var DESK_SUFFIX = '';
	
	// Determine best way of getting viewport width
	var widthElem = window;
	var widthProp = 'innerWidth';
	if (!(widthProp in widthElem)) {
		widthElem = document.documentElement;
		widthProp = 'clientWidth';
	}
	
	/**
	 * Lazy load a number of images.
	 * @param {jQuery} $images - the image elements to lazy-load
	 */
	function LazyLoad($images) {
		this.$images = $images;
		
		// Parse the configuration of each image
		this.configs = [];
		$images.each(function (i, img) {
			var $img = $(img);
			
			this.configs.push({
				// The raw `src` attribute
				src: $img.data('src'),
				
				// Whether the image is hidden until a specific width
				hiddenUntil: $img.data('hidden-until') || 0,
				
				// Whether the image has been loaded once before
				loadedOnce: false
			});
		}.bind(this));
		
		// Load the images
		this.load();
		
		// Reload when window is resized
		$(window).debResize(this.load.bind(this));
	}
	
	/**
	 * Load the images.
	 */
	LazyLoad.prototype.load = function load() {
		// Compute the width of the window
		var width = this.computeWidth();
		
		// Compute the corresponding suffix
		var newSuffix = this.computeSuffix(width);
		
		// Loop through the images
		this.$images.each(function (index, img) {
			var $img = $(img);
			var config = this.configs[index];
			
			// Load only if the image is visible at this width and if either the image
			// has never been loaded before, or the suffix has changed
			if (config.hiddenUntil < width && (!config.loadedOnce || this.suffix !== newSuffix)) {
				// Replace suffix and set new `src` attribute
				$img.attr('src', config.src.replace('-suffix', newSuffix));
				
				// Mark as loaded
				config.loadedOnce = true;
			}
		}.bind(this));
		
		// Save the suffix
		this.suffix = newSuffix;
	};
	
	/**
	 * Compute the current width of the window in em.
	 * @return {Integer}
	 */
	LazyLoad.prototype.computeWidth = function computeWidth() {
		return widthElem[widthProp] / ROOT_FONT_SIZE;
	};
	
	/**
	 * Compute the suffix for the current window width.
	 * @param {Integer} width
	 * @return {String} - the suffix: 'mob', 'tab', or an empty string
	 */
	LazyLoad.prototype.computeSuffix = function computeSuffix(width) {
		return (width < DESK_WIDTH ? (width < TAB_WDITH ? MOB_SUFFIX : TAB_SUFFIX) : DESK_SUFFIX);
	};
	
	// Register `lazyLoad` jQuery plugin
	$.fn.lazyLoad = function lazyLoad() {
		new LazyLoad(this);
	};
	
}(jQuery));
