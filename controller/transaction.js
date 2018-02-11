var 
  express = require('express'),
  router = express.Router(),
  bodyParser = require('body-parser'),
  Transaction = require('../models/transaction'),
  Prices = require('../models/prices');

// support json/url encoded bodies
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", function(req, res) {
  Transaction.find(function(err, transactions) {
    if (err) {
      console.log(err);
      return res.status(500).send(false);
    }
    return res.status(200).send(transactions)
  });
});

router.get("/:n", function(req, res) {
  var sellerId = req.params.n;
  Transaction.find({"sellerId": sellerId}, function(err, transactions) {
    if (err) {
      console.log(err);
      return res.status(500).send(false);
    }
    return res.status(200).send(transactions);
  })
});

// { "date" : "2018-02-11", "sellerId" : 1, "buyerId" : 1, "fishId" : 1, "countryId" : 2, "price" : 1.05, "quantity" : 10 }
router.post("/", function(req, res) {
  var transaction = new Transaction(req.body);
  var fishId = transaction.fishId;
  var countryId = transaction.countryId;
  var newPrice = transaction.price;

  // persist the transaction
  transaction.save(function(err, createdObject) {
    if (err) {
      console.log(err);
      return res.status(500).send(false);
    }
  });

  var max = newPrice;
  var min = newPrice;
  var priceSum = newPrice;
  var listCount = 1;

  // find transactions by fishId, countryId and determine new max/min/avg
  var transactionPromise = 
    Transaction.find({"fishId" : fishId, "countryId" : countryId}, function(err, transactions) {
      listCount += transactions.length;
      transactions.forEach(function(entry) {
        if (entry.price > max) {
          max = entry.price;
        }
        if (entry.price < min) {
          min = entry.price
        }
        priceSum += entry.price;
      }); 
    })
    
  transactionPromise.then(function() {
    var average = priceSum / listCount;
  
    // update price table for the fishId, countryId
    Prices.findOne({"fishId" : fishId, "countryId" : countryId}, function(err, entry) {
      if (err) {
        console.log(err);
        return res.status(500).send(false);
      }
      entry.max = max;
      entry.min = min;
      entry.average = average;
      entry.save(function (err, entry) {
        if (err) {
          console.log(err);
          return res.status(500).send(false);
        }
        return res.status(200).send(true);
      })
    })
  })

});

module.exports = router;