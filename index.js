const mongoose = require('mongoose');
const express = require('express');
const app = express();

var Fish = require('./models/fish');


var db = mongoose.connection;
db.on('error', function() {
  console.log("error");
});
db.once('open', function() {
  console.log("opened");
});


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   Fish.find(function(err, fishes) {
    if (err) res.send(err);
    console.log(fishes);
  });
});