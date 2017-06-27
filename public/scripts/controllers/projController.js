'use strict';

var app = app || {};

(function(module) {
  const projController = {};

  projController.index = () => {
    $('main > section').hide();
    $('#proj').show();
    // app.Project.fetchAll();
  };

  module.projController = projController;
})(app);
