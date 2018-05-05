
var express = require('express'),
  app = express(),
  port = process.env.PORT || 7000,
  mongoose = require('mongoose'),
  cors = require("cors"),
  Projects = require('./api/models/Projects'), 
  
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://dotunSela:dotunSela@ds115350.mlab.com:15350/projects',  { server: { 
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000 
  } 
});

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var projectsRoute = require('./api/routes/projectsRoute'); 

projectsRoute(app); 

app.listen(port);

console.log('projects RESTful API server started on: ' + port);
