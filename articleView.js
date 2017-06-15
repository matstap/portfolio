'use strict';



function handleTabs() {
  $('.top-header .tab:first').click(function() {
    $('#articles').show();
    $('#about').hide();
  });

  $('.top-header .tab:last').click(function() {
    $('#articles').hide();
    $('#about').show();
  });
}

$(document).ready(function() {
  handleTabs();
});
