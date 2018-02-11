// required modules
const
  mongoose = require('mongoose'),
  express = require('express');

// setup variables
var app = express();

// db models
var Fish = require('./models/fish');
var Country = require('./models/country');
var Buyer = require('./models/buyer');
var Seller = require('./models/seller');
var Transaction = require('./models/transaction');
var Prices = require('./models/prices');

// db connection

var db = mongoose.connection;
db.once('open', function() {
  console.log("mongodb connection established");
});
db.on('error', function() {
  console.log("mongodb connection failed");
});

// start server
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Listening at http://%s:%s", host, port);
});

// ===== ENDPOINTS =====

// country GET
app.get("/country", function(req, res) {
  Country.find(function(err, countries) {
    console.log(countries);
    if (err) res.send(err);
    res.send(countries)
  });
});

// fish GET
app.get("/fish", function(req, res) {
  Fish.find(function(err, fishes) {
    console.log(fishes);
    if (err) res.send(err);
    res.send(fishes)
  });
});

// buyer GET
app.get("/buyer", function(req, res) {
  Buyer.find(function(err, buyers) {
    console.log(buyers);
    if (err) res.send(err);
    res.send(buyers)
  });
});

// seller GET
app.get("/seller", function(req, res) {
  Seller.find(function(err, sellers) {
    console.log(sellers);
    if (err) res.send(err);
    res.send(sellers)
  });
});

// prices GET
app.get("/prices", function(req, res) {
  Prices.find(function(err, prices) {
    console.log(prices);
    if (err) res.send(err);
    res.send(prices)
  });
});

// transaction GET
app.get("/transaction", function(req, res) {
  Transaction.find(function(err, transactions) {
    console.log(transactions);
    if (err) res.send(err);
    res.send(transactions)
  });
});
