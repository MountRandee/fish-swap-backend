var 
  express = require('express'),
  router = express.Router(),
  Buyer = require('../models/buyer');

router.get("/", function(req, res) {
  Buyer.find(function(err, buyers) {
    if (err) {
      conole.log(err);
      return res.status(500).send(false);
    }
    return res.status(200).send(buyers);
  });
});

module.exports = router;