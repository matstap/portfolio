'use strict';

var articleView = {};

articleView.handleTabs = function() {
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
};

articleView.initIndex = function() {
  Project.all.forEach(function(project) {
    $('#proj').append(project.toHtml());
  });
  articleView.handleTabs();
};

// $(document).ready(function() {
//   handleTabs();
// });
