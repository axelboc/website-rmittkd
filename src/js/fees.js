
/*
 * Simulate behaviour of CSS declaration 'pointer-events: none;' on hero image, for IE/Opera compatibility.
 * The goal is to pass mouse events to the third membership option box, which is overloapped by the hero image. 
 */
$(function () {
	
	var $hero = $(document.getElementById("fees-hero"));
	var $opt = $(document.getElementById("fees-public"));
	var off = $opt.offset();
	var optBox = {
		left: off.left,
		top: off.top,
		right: off.left + $opt.outerWidth(),
		bottom: off.top + $opt.outerHeight()
	};
	
	$hero.on("mousemove", function (evt) {
		if (evt.pageX >= optBox.left && evt.pageX <= optBox.right && 
			evt.pageY >= optBox.top && evt.pageY <= optBox.bottom) {
				$hero.addClass("fees-hero--hovered");
				$opt.addClass("mbrship--hovered");
			} else {
				$hero.removeClass("fees-hero--hovered");
				$opt.removeClass("mbrship--hovered");
			}
	});
	
	$hero.on("mouseout", function (evt) {
		$hero.removeClass("fees-hero--hovered");
		$opt.removeClass("mbrship--hovered");
	});
	
	$hero.click(function (evt) {
		if ($hero.hasClass("fees-hero--hovered")) {
			$opt.click();
			window.open($opt.attr("href"));
		}
	});
	
});
