var 
  express = require('express'),
  router = express.Router(),
  Prices = require('../models/prices');

router.get("/", function(req, res) {
  Prices.find(function(err, prices) {
    console.log(prices);
    if (err) res.send(err);
    res.send(prices)
  });
});

module.exports = router;