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
};

Project.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.lastDate)) - (new Date(a.lastDate));
  });

  rawData.forEach(function(projObj) {
    Project.all.push(new Project(projObj));
  });
};

Project.fetchAll = function() {
  var eTag;

  $.ajax({
    url: '/data/projects.json',
    type: 'HEAD',
    success: function(data, message, xhr) {
      eTag = xhr.getResponseHeader('eTag');
      console.log(xhr);
    },
    fail: function(err) {
      console.error('Broke because:', err);
    }
  });

  if (localStorage.rawData && localStorage.eTag === eTag) {
    Project.loadAll(JSON.parse(localStorage.rawData));
    articleView.initIndex();
  } else {
    $.getJSON('data/projects.json')
    .then(function(data) {
      localStorage.rawData = JSON.stringify(data);
      localStorage.eTag = eTag;
      Project.loadAll(data);
      articleView.initIndex();
    });
  }
};
