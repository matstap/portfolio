'use strict';

var app = app || {};

(function(module) {
  const projController = {};

  projController.index = () => {
    $('main > section').hide();
    $('#proj').show();
    // app.Project.fetchAll();
    app.Project.requestProject(app.articleView.index);
  };

  module.projController = projController;
})(app);
