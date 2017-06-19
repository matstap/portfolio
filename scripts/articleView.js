'use strict';

function handleTabs() {
  $('.tab').click(function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
    if($(window).width() < 640) {
      $('.nav').toggleClass('clicked');
    }
  });

  $('.home').click(function() {
    $('main section').hide();
    $('main section').fadeIn();
  });
}

$(document).ready(function() {
  handleTabs();
});
