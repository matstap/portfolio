'use strict';
var app = app || {};

(function(module) {
  const Project = {};

  Project.all = [];

  Project.requestProject = function(callback) {
    $.get('/github/user/repos')
    .then(data => Project.all = data, err => console.error(err))
    .then(callback);
  };

  Project.with = attr => Project.all.filter(repo => repo[attr]);

  module.Project = Project;
})(app);
