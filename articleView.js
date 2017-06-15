'use strict';

function handleTabs() {
  $('.top-header .tab:first, .nav .tab:first').click(function() {
    $('#proj').show();
    $('#about').hide();
    if($(window).width() < 640) {
      $('.nav').toggleClass('clicked');
    }
  });

  $('.top-header .tab:last, .nav .tab:last').click(function() {
    $('#proj').hide();
    $('#about').show();
    if($(window).width() < 640) {
      $('.nav').toggleClass('clicked');
    }
  });
}

$(document).ready(function() {
  handleTabs();
});
