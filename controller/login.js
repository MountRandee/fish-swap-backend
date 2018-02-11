var 
  express = require('express'),
  router = express.Router(),
  bodyParser = require('body-parser'),
  Seller = require('../models/seller');

 // support json/url encoded bodies
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", function(req, res) {
  var phoneNumber = req.body.phoneNumber;
  var password = req.body.password;
  
  if (phoneNumber  == null || password == null) {
    return res.status(500).send(false);
  }

  Seller.findOne().
  where('phoneNumber').equals(phoneNumber).
  where('password').equals(password).
  exec(function(err, seller) {
    if (err) {
      console.log(err);
      return res.status(500).send(false);
    }
    
    if (seller) {
      return res.status(200).send(true);
    }
    return res.status(500).send(false);
  });

});

module.exports = router;