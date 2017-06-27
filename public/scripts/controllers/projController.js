'use strict';

var app = app || {};

(function(module) {
  const projController = {};

  projController.index = () => {
    $('main > section').hide();
    $('#articles').show();
    app.Project.fetchAll();
  };

  module.projController = projController;
})(app);
