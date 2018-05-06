'use strict';

var mongoose = require('mongoose'),
  Project = mongoose.model('Projects');

exports.list_projects = function(req, res) {
    Project.find({ }, function(err, project) {
    if (err)
      res.send(err);
      setTimeout(()=>{
        res.json(project);      
      }, 500)
  }).limit(parseInt(req.params.amount,10));
};

exports.list_all_project_data_for_map = function(req, res) {
    Project.find({}, function(err, project) {
    if (err)
      res.send(err);
      setTimeout(()=>{
        res.json(
          project
        );      
      }, 500)
  }).select("keyword location projectStatus")
};

exports.create_a_project = function(req, res) {
  var new_project = new Project(req.body);
  new_project.save(function(err, project) {
    if (err)
      res.status(406).send(err);

    res.status(200).json(project)
  });
};
