'use strict';
var app = app || {};

(function(module) {
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
    app.Project.all.forEach(project => $('#proj').append(project.toHtml()));
    articleView.handleTabs();
    $('#proj .number').text(`${app.Project.numCollabs()} collaborators`);
  };

  module.articleView = articleView;
})(app);
