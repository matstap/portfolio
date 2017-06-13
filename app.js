'use strict'

$(document).ready(function() {
  $('.icon-menu').click(function() {
    if ($(this).hasClass('clicked')) {
      $(this).removeClass('clicked');
      $('#nav').removeClass('clicked')
    } else {
      $(this).addClass('clicked');
      $('#nav').addClass('clicked');
    }
  });
});
