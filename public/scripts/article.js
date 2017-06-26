'use strict';
var app = app || {};

(function(module) {
  function Project(rawData){
    this.url = rawData.url;
    this.title = rawData.title;
    this.lastDate = rawData.lastDate;
    this.body = rawData.body;
    this.collabs = rawData.collabs;
  }

  Project.all = [];

  Project.prototype.toHtml = function() {
    let template = Handlebars.compile($('#proj-template').text());

    this.daysAgo = parseInt((new Date() - new Date(this.lastDate))/60/60/24/1000);
    this.publishStatus = this.lastDate ? `published ${this.daysAgo} days ago` : '(draft)';
    this.body = marked(this.body);

    return template(this);
  };

  Project.loadAll = data => {
    data.sort((a,b) => (new Date(b.publishedOn)) - (new Date(a.publishedOn)));
    data.map(ele => Project.all.push(new Project(ele)));
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

    if (localStorage.projData && localStorage.eTag === eTag) {
      Project.loadAll(JSON.parse(localStorage.projData));
      app.articleView.initIndex();
    } else {
      $.getJSON('data/projects.json')
      .then(function(data) {
        localStorage.projData = JSON.stringify(data);
        localStorage.eTag = eTag;
        Project.loadAll(data);
        app.articleView.initIndex();
      });
    }
  };

  Project.numCollabs = () =>
    app.Project.all.map(p => p.collabs.split(',').length)
    .reduce((acc, cur) => (cur > 1) ? acc + cur : 0);


  module.Project = Project;
})(app);
