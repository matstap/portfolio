'use strict';

function handleTabs() {
  $('.top-header .tab:first, .top-header li:first, .nav .tab:first').click(function() {
    $('#proj').show();
    $('#about').hide();
  });

  $('.top-header .tab:last, .nav .tab:last').click(function() {
    $('#proj').hide();
    $('#about').show();
  });
}

$(document).ready(function() {
  handleTabs();
});
