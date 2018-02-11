var 
  express = require('express'),
  router = express.Router(),
  Seller = require('../models/seller');

router.post("/", function(req, res) {
  console.log(req);
});

module.exports = router;