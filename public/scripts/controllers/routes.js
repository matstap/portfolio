'use strict';

var app = app || {};

page('/about', app.aboutController.index);
page('/', app.projController.index);
page('/skills', app.skillsController.index);
page();
