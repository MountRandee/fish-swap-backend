// environment variables
require('dotenv').config();

// required modules
const
  mongoose = require('mongoose'),
  express = require('express');

// setup variables
var app = express();

// load all routes
app.use(require('./controller'))

// db connection
var 
  dbHost = process.env.DB_HOST,
  dbPort = process.env.DB_PORT,
  dbUser = process.env.DB_USER,
  dbPass = process.env.DB_PASS,
  connectionUrl = 'mongodb://' + dbUser + ':' + dbPass + '@' + dbHost + ':' + dbPort + '/hackathon';

mongoose.connect(connectionUrl);

var db = mongoose.connection;

db.once('open', ()=> { console.log("mongodb connection established: " + connectionUrl); });
db.on('error', ()=> { console.log("mongodb connection failed: " + connectionUrl); });

// start server
var 
  host = process.env.APP_HOST,
  port = process.env.APP_PORT;

app.listen(port, host, ()=> { console.log("Listening at http://%s:%s", host, port); });