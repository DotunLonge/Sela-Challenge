'use strict';
module.exports = function(app) {
  var projects = require('../controllers/projectsController');

  // todoList Routes
  app.route('/projects')
    .get(projects.list_all_project_data_for_map)
    .post(projects.create_a_project);

  app.route("/projects/:amount")
    .get(projects.list_projects)
  
}
