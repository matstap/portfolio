'use strict';
var app = app || {};

(function(module) {
  const articleView = {};

  const ui = function() {
    let $proj = $('#proj');

    $proj.find('section').remove();
  };

  var render = Handlebars.compile($('#proj-template').text());

  articleView.index = function() {
    ui();

    $('#proj').append(
      app.Project.with('stargazers_count').map(render)
    );
  };

  module.articleView = articleView;
})(app);
