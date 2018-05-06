'use strict';

var mongoose = require('mongoose'),
  Project = mongoose.model('Projects');

exports.list_all_projects = function(req, res) {
    Project.find({}, function(err, project) {
    if (err)
      res.send(err);
      res.json(project);      
  });
};

exports.create_a_project = function(req, res) {
  var new_project = new Project(req.body);
  new_project.save(function(err, project) {
    if (err)
      res.status(406).send(err);

    res.status(200).json(project)
  });
};
