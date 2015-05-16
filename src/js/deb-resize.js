
/**
 * Debounced resize plugin.
 */
(function ($) {
	'use strict';
	
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

}(jQuery));
