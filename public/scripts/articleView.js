'use strict';
var app = app || {};

(function(module) {
  const articleView = {};

  const ui = function() {
    let $proj = $('#proj');

    $proj.find('section').remove();
  };

  var render = Handlebars.compile($('#proj-template').text());

  articleView.index = function() {
    ui();

    $('#proj').append(
      app.Project.with('name').map(render)
    );
  };

  module.articleView = articleView;
})(app);


// 'use strict';
// var app = app || {};
//
// (function(module) {
//   var articleView = {};
//
//   articleView.initIndex = function() {
//     app.Project.all.forEach(project => $('#proj').append(project.toHtml()));
//     $('#proj .number').text(`${app.Project.numCollabs()} collaborators`);
//   };
//
//   module.articleView = articleView;
// })(app);
