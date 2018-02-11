var 
  express = require('express'),
  router = express.Router(),
  bodyParser = require('body-parser'),
  Transaction = require('../models/transaction');

// support json/url encoded bodies
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", function(req, res) {
  Transaction.find(function(err, transactions) {
    console.log(transactions);
    if (err) res.send(err);
    res.send(transactions)
  });
});


// { "date" : "2018-02-11", "sellerId" : 1, "buyerId" : 1, "fishId" : 1, "countryId" : 2, "price" : 1.05, "quantity" : 10 }
router.post("/", function(req, res) {
  var transaction = new Transaction(req.body);
  transaction.save(function(err, createdObject) {
    if (err) {
      res.status(500).send(false);
    }
    res.status(200).send(true);
  });
});

module.exports = router;