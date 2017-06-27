'use strict';
var app = app || {};

(function(module) {
  var articleView = {};

  articleView.initIndex = function() {
    app.Project.all.forEach(project => $('#proj').append(project.toHtml()));
    $('#proj .number').text(`${app.Project.numCollabs()} collaborators`);
  };

  module.articleView = articleView;
})(app);
