$(window).resize(function(){var n=document.getElementById("js-navigation-more"),e=$(window).width(),o=$(n).offset().left,i=e-o;330>i&&($("#js-navigation-more .submenu .submenu").removeClass("fly-out-right"),$("#js-navigation-more .submenu .submenu").addClass("fly-out-left")),i>330&&($("#js-navigation-more .submenu .submenu").removeClass("fly-out-left"),$("#js-navigation-more .submenu .submenu").addClass("fly-out-right"))}),$(document).ready(function(){var n=$("#js-mobile-menu").unbind();$("#js-navigation-menu").removeClass("show"),n.on("click",function(n){n.preventDefault(),$("#js-navigation-menu").slideToggle(function(){$("#js-navigation-menu").is(":hidden")&&$("#js-navigation-menu").removeAttr("style")})})});