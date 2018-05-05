'use strict';

var mongoose = require('mongoose'),
  ProjectContractor = mongoose.model('Contractor');

exports.list_all_contractors = function(req, res) {
    ProjectContractor.find({}, function(err, Contractor) {
    if (err)
      res.send(err);
    res.json(Contractor);
  });
};

exports.create_a_contractor = function(req, res) {
  var projectContractor = new ProjectContractor(req.body);
  console.log(req.body)
  projectContractor.save(function(err, Contractor) {
    if (err)
      res.send(err);
    res.json(Contractor);
  });
};
