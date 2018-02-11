var 
  express = require('express'),
  router = express.Router(),
  Seller = require('../models/seller');

router.get("/", function(req, res) {
  Seller.find(function(err, sellers) {
    console.log(sellers);
    if (err) res.send(err);
    res.send(sellers)
  });
});

module.exports = router;