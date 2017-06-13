'use strict'

function Project(url, name, date, about, tools, collabs){
  this.url = url;
  this.name = name;
  this.date = date;
  this.about = about;
  this.tools = tools;
  this.collabs = collabs;
}

$(document).ready(function() {
  $('.icon-menu').click(function() {
    if ($(this).hasClass('clicked')) {
      $(this).removeClass('clicked');
      $('#nav').removeClass('clicked')
    } else {
      $(this).addClass('clicked');
      $('#nav').addClass('clicked');
    }
  });
});
