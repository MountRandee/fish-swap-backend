var 
  express = require('express'),
  router = express.Router(),
  Buyer = require('../models/buyer');

router.get("/", function(req, res) {
  Buyer.find(function(err, buyers) {
    console.log(buyers);
    if (err) res.send(err);
    res.send(buyers)
  });
});

module.exports = router;