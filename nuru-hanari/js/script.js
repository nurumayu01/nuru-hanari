$(document).ready(function () {
  $(".drawer").drawer();
});

var navPos = jQuery(".header").offset().top;
var navHeight = jQuery(".header").outerHeight();
jQuery(window).on("scroll", function () {
  if (50 < jQuery(this).scrollTop()) {
    jQuery(".header").addClass("header_transform");
  } else {
    jQuery(".header").removeClass("header_transform");
  }
  if (window.matchMedia("(max-width: 1024px) and (min-width: 375px)").matches) {
    jQuery(".header").removeClass("header_transform");
  }
});

var navPos = jQuery("header-nav__link").offset().top;
var navHeight = jQuery("header-nav__link").outerHeight();
jQuery(window).on("scroll", function () {
  if (50 < jQuery(this).scrollTop()) {
    jQuery("header-nav__link").addClass("header-height_transform");
  } else {
    jQuery("header-nav__link").removeClass("header-height_transform");
  }
  if (window.matchMedia("(max-width: 1024px) and (min-width: 375px)").matches) {
    jQuery("header-nav__link").removeClass("header-height_transform");
  }
});


