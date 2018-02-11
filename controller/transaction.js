var 
  express = require('express'),
  router = express.Router(),
  Transaction = require('../models/transaction');

router.get("/", function(req, res) {
  Transaction.find(function(err, transactions) {
    console.log(transactions);
    if (err) res.send(err);
    res.send(transactions)
  });
});

module.exports = router;