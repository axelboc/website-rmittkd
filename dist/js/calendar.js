$(function(){function a(a,b){a.attr("aria-disabled",!b),b?(a.removeClass("arrow-disabled"),a.removeAttr("tabindex")):(a.addClass("arrow-disabled"),a.attr("tabindex","-1"))}function b(b){a(g,!0),a(h,!0),1===b&&a(g,!1),b+1===i&&a(h,!1)}function c(a){var c=f.filter(".cal-month--current").index();a?(f.eq(c-2).toggleClass("cal-month--before cal-month--previous").attr("aria-hidden",!1),f.eq(c-1).toggleClass("cal-month--previous cal-month--current"),f.eq(c).toggleClass("cal-month--current cal-month--after").attr("aria-hidden",!0),c--):(f.eq(c+1).toggleClass("cal-month--after cal-month--current").attr("aria-hidden",!1),f.eq(c).toggleClass("cal-month--current cal-month--previous"),f.eq(c-1).toggleClass("cal-month--previous cal-month--before").attr("aria-hidden",!0),c++),b(c)}var d=$(document.getElementById("calendar")),e=d.children(".cal-months"),f=e.children(".cal-month"),g=d.children(".cal-arrow--prev"),h=d.children(".cal-arrow--next"),i=f.length,j=function(){var a,b=document.createElement("div");return document.body.insertBefore(b,null),"undefined"!=typeof b.style.transform&&(b.style.transform="translate3d(1px, 1px, 1px)",a=window.getComputedStyle(b).getPropertyValue("transform")),document.body.removeChild(b),"undefined"!=typeof a&&a.length>0&&"none"!==a}();j||d.addClass("no3d"),g.click(function(a){a.preventDefault(),g.blur(),g.hasClass("arrow-disabled")||c(!0)}),h.click(function(a){a.preventDefault(),h.blur(),h.hasClass("arrow-disabled")||c(!1)})});