'use strict';

function handleTabs() {
  $('.top-header, .nav').on('click', '.tab', function() {
    $('.tab-content').hide();

    $('#' + $(this).data('content')).fadeIn();
    if($(window).width() < 640) {
      $('.nav').toggleClass('clicked');
    }
  });

  $('top-header .tab, .nav .tab').click();

  $('.home').click(function() {
    $('main section').hide();
    $('main section').fadeIn();
  });
}

$(document).ready(function() {
  handleTabs();
});
