
/**
 * Facebook feed plugin.
 */
(function ($) {
	'use strict';
	
	/**
	 * Facebook feed.
	 * @param {Element} root - the <section> element representing the feed
	 */
	function FacebookFeed(root) {
		this.root = root;
		this.$root = $(root);
		this.$linksSection = this.$root.prev();
		this.$loading = this.$root.find('.fb-loading');
		this.$page = this.$root.find('.fb-page');
		this.$iframe = null;
		
		this.loading = false;
		this.queueLoading = false;
		
		// Hide fallback and show loading spinner
		this.$root.find('.fb-fallback').attr('hidden', 'hidden');
		this.$loading.removeAttr('hidden');
		
		// Load Facebook SDK
		$.ajax({
			url: '//connect.facebook.net/en_US/sdk.js',
			dataType: "script",
			cache: true
		}).done(this.initSDK.bind(this));
		
		// Reload feed when window is resized
		$(window).debResize(this.loadFeed.bind(this));
	}
	
	/**
	 * Initialise the Facebook SDK then load the feed.
	 */
	FacebookFeed.prototype.initSDK = function initSDK() {
		// Initialise SDK
		FB.init({
			xfbml: false,
			version: 'v2.3'
		});

		// Load feed
		this.loadFeed();
	};
	
	/**
	 * Load the feed.
	 */
	FacebookFeed.prototype.loadFeed = function loadFeed() {
		// If feed already loading, do not reload
		if (this.loading) {
			this.queueLoading = true;
			return;
		}
		
		// Set loading flag
		this.loading = true;
		
		// Show spinner and reset iframe height
		this.$loading.removeAttr('hidden');
		if (this.$iframe) {
			this.$iframe.attr('style', 'height: auto!important;');
		}
		
		// Retrieve dimensions of feed
		var w = this.$root.width();
		var h = this.$linksSection.height();
		
		// Set dimensions as data attributes
		this.$page.attr({
			'data-width': w,
			'data-height': h
		});
		
		// Parse the feed
		FB.XFBML.parse(this.root, function () {
			// Wait for SDK to apply its own styles to the feed's iframe
			setTimeout(this.feedParsed.bind(this, h), 0);
		}.bind(this));
	};
	
	/**
	 * Function called once the feed is parsed by the SDK.
	 * @param {Number} height - the height of the feed
	 */
	FacebookFeed.prototype.feedParsed = function feedParsed(height) {
		// Retrieve iframe
		this.$iframe = this.$page.find('iframe');

		// Hide spinner
		this.$loading.attr('hidden', 'hidden');

		// Update heights
		this.$root.css('min-height', height + 'px');
		this.$iframe.attr('style', 'height: ' + height + 'px!important;');

		// If an attempt to reload the feed occured while loading, reload
		if (this.queueLoading) {
			setTimeout(this.processQueue.bind(this), 0);
		} else {
			// Reset loading flag
			this.loading = false;
		}
	};
	
	/**
	 * Process a queued reload.
	 */
	FacebookFeed.prototype.processQueue = function processQueue() {
		// Reset flags
		this.loading = false;
		this.queueLoading = false;
		
		// Reload feed
		this.loadFeed();
	};
	
	// Register jQuery `facebookFeed` plugin
	$.fn.facebookFeed = function facebookFeed() {
		this.each(function () {
			new FacebookFeed(this);
		});
	};
	
}(jQuery));
