var 
  express = require('express'),
  router = express.Router(),
  Seller = require('../models/seller');

router.get("/", function(req, res) {
  Seller.find(function(err, sellers) {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    return res.status(200).send(sellers)
  });
});

module.exports = router;