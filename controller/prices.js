var 
  express = require('express'),
  router = express.Router(),
  Prices = require('../models/prices');

router.get("/", function(req, res) {
  Prices.find(function(err, prices) {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    return res.status(200).send(prices)
  });
});

module.exports = router;