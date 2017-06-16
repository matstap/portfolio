'use strict';

function handleTabs() {
  $('.top-header, .nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
    if($(window).width() < 640) {
      $('.nav').toggleClass('clicked');
    }
  });

  $('.main-nav .tab:first').click();
}

$(document).ready(function() {
  handleTabs();
});
