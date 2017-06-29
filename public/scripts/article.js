'use strict';
var app = app || {};

(function(module) {
  const Project = {};

  Project.all = [];

  Project.requestProject = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos',
      headers: {'Authorization' : 'token ' + GITHUB_TOKEN},
      success: function(data){
        Project.all = data;
        callback();
      }
    });
  };

  Project.with = attr => Project.all.filter(repo => repo[attr]);

  module.Project = Project;
})(app);
