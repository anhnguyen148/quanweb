$(document).ready(function () {
  "use strict";
  
  // Back to top button
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('fast');
    } else {
      $('.back-to-top').fadeOut('fast');
    }
  });
  $('.back-to-top').on("click", function () {
    $('html, body').animate({ scrollTop: 0 }, 1000, 'easeOutExpo');
    return false;
  });

});