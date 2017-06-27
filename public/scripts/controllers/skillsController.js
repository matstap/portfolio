'use strict';

var app = app || {};

(function(module) {
  const skillsController = {};

  skillsController.index = () => {
    $('main > section').hide();
    $('#skills').show();
  };

  module.skillsController = skillsController;
})(app);
