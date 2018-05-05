'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectsSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the project'
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  startDate: Date,
  endDate: Date,
  keyword: String,
  location : { 
    name: String,
    lat: Number, 
    lng: Number
  },
  description: {
    type: String,
    required: "Project Description Is Required"
  },
  projectPicture:  String,
  projectStatus: String,
  completionPercentage: Number,
  budget: {
    type: Number,
    required: "A Project Must Have A Budget"    
  },
  contractors:  [
    {  
      name: {
          type: String,
          required: true
      },
      avatarUrl: {
          type: String,
          required: true
      }
    }
  ]
});

module.exports = mongoose.model('Projects', ProjectsSchema);