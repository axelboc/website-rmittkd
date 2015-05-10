
$(function () {
	'use strict';
	
	/* ===== Facebook feed ===== */
	
	// Stop if `.fb-root` element not found (not social page)
	if ($(document.getElementById('fb-root')).length === 0) {
		return;
	}
	
	// Find elements
	var $linksSection = $('.links-section');
	var $fbSection = $('.fb-section');
	var $fbLoading = $fbSection.find('.fb-loading');
	var $fbPage = $fbSection.find('.fb-page');
	var $fbIframe;
	
	// Flags
	var loading = false;
	var queueLoading = false;
	
	// Hide fallback and show loading spinner
	$('.fb-fallback').addClass('hidden');
	$fbLoading.removeClass('hidden');
	
	// Load Facebook SDK
	$.ajax({
		url: '//connect.facebook.net/en_US/sdk.js',
		dataType: "script",
		cache: true
	}).done(function() {
		// Initialise SDK
		FB.init({
			xfbml: false,
			version: 'v2.3'
		});
		
		// Load feed
		loadFeed();
	});
	
	// Load the Facebook feed
	function loadFeed() {
		// If feed already loading, do not reload
		if (loading) {
			queueLoading = true;
			return;
		}
		
		// Set loading flag
		loading = true;
		
		// Show spinner and reset iframe height
		$fbLoading.removeClass('hidden');
		if ($fbIframe) {
			$fbIframe.attr('style', 'height: auto!important;');
		}
		
		var w = $fbSection.width();
		var h = $linksSection.height();
		
		$fbPage.attr({
			'data-width': w,
			'data-height': h
		});
		
		FB.XFBML.parse($fbSection[0], function () {
			setTimeout(function () {
				// Retrieve iframe
				$fbIframe = $fbSection.find('.fb-page iframe');

				// Hide spinner
				$fbLoading.addClass('hidden');

				// Update heights
				$fbSection.css('min-height', h + 'px');
				$fbIframe.attr('style', 'height: ' + h + 'px!important;');
				
				// Reset loading flag
				loading = false;
				
				if (queueLoading) {
					setTimeout(function () {
						queueLoading = false;
						loadFeed();
					}, 0);
				}
			}, 0);
		});
	}
	
	// Reload FB feed when window is resized
	$(window).debResize(loadFeed);
	
});
