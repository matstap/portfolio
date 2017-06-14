'use strict'

function Project(url, name, date, about, tools, collabs){
  this.url = url;
  this.name = name;
  this.date = date;
  this.about = about;
  this.tools = tools;
  this.collabs = collabs;
}

$('.icon-menu').click(function() {
  $('#nav').toggleClass('clicked');
});
