'use strict';

var projects = [];

function Project(rawData){
  this.url = rawData.url;
  this.title = rawData.title;
  this.lastDate = rawData.lastDate;
  this.body = rawData.body;
  this.collabs = rawData.collabs;
}

Project.prototype.toHtml = function() {
  var template = $('#proj-template').html();
  var templateRender = Handlebars.compile(template);

  this.daysAgo = parseInt((new Date() - new Date(this.lastDate))/60/60/24/1000);
  this.publishStatus = this.lastDate ? `published ${this.daysAgo} days ago` : '(draft)';

  return templateRender(this);

  // var $newProject = $('article.template').clone();
  // $newProject.removeClass('template');
  //
  // $newProject.find('h1 a').html(this.title);
  // $newProject.find('h1 a').attr('href', this.url);
  // console.log(this.url);
  // $newProject.find('.byline span').html(this.collabs);
  // $newProject.find('.article-body').html(this.body);
  // $newProject.find('time').attr('pubdate', this.lastDate);
  //
  // $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.lastDate))/60/60/24/1000) + ' days ago');
  // $newProject.append('<hr>');
  // return $newProject;
};

rawData.sort(function(a,b) {
  return (new Date(b.lastDate)) - (new Date(a.lastDate));
});

rawData.forEach(function(projObj) {
  projects.push(new Project(projObj));
});

projects.forEach(function(project) {
  $('#proj').append(project.toHtml());
});
