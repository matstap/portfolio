'use strict';

function Project(rawData){
  this.url = rawData.url;
  this.title = rawData.title;
  this.lastDate = rawData.lastDate;
  this.body = rawData.body;
  this.collabs = rawData.collabs;
}

Project.all = [];

Project.prototype.toHtml = function() {
  // let template = Handlebars.compile($('#proj-template').text());
  var template = $('#proj-template').text();
  var templateRender = Handlebars.compile(template);

  this.daysAgo = parseInt((new Date() - new Date(this.lastDate))/60/60/24/1000);
  this.publishStatus = this.lastDate ? `published ${this.daysAgo} days ago` : '(draft)';
  this.body = marked(this.body);

  return templateRender(this);
  // return template(this);
};

Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
    articleView.initIndex();
  } else {
    $.getJSON('data/projects.json')
    .then(function(data) {
      localStorage.rawData = JSON.stringify(data);
      Project.loadAll(data);
      articleView.initIndex();
    });
  }
};

// rawData.sort(function(a,b) {
//   return (new Date(b.lastDate)) - (new Date(a.lastDate));
// });
//
// rawData.forEach(function(projObj) {
//   projects.push(new Project(projObj));
// });
//
// projects.forEach(function(project) {
//   $('#proj').append(project.toHtml());
// });
