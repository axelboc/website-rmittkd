$(function(){var a,b=$(document.getElementById("calendar")),c=b.children(".cal-months-wrapper").children(".cal-months"),d=c.children(".cal-month"),e=b.children(".cal-arrow-prev"),f=b.children(".cal-arrow-next"),g=$(document.getElementById("cal-resp-ref")),h=new Date,i=d.filter(".cal-month-"+h.getFullYear()+"-"+(h.getMonth()+1)),j=d.length,k=d.index(i),l=function(){a="left"===g.css("float")?2:1,2===a&&k===j-1&&k--},m=function(a,b){a.attr("aria-disabled",!b),b?(a.removeClass("arrow-disabled"),a.removeAttr("tabindex")):(a.addClass("arrow-disabled"),a.attr("tabindex","-1"))},n=function(){m(e,!0),m(f,!0),0===k&&m(e,!1),k+a===j&&m(f,!1)},o=function(b){l(),n(),d.attr("aria-hidden",!0),d.slice(k,k+a).attr("aria-hidden",!1);var e=100*-k/a;b?(c.stop(),c.animate({marginLeft:e+"%"},600,function(){d.get(k).focus()})):c.css("margin-left",e+"%")};o(!1),$(window).resize(function(){o(!1)}),e.click(function(a){return k>0&&(k--,e.blur(),o(!0)),a.preventDefault(),!1}),f.click(function(b){return j>k+a&&(k++,f.blur(),o(!0)),b.preventDefault(),!1})});