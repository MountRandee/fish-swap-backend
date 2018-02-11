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
    res.send(false);
  }

  Seller.findOne().
  where('phoneNumber').equals(phoneNumber).
  where('password').equals(password).
  exec(function(err, seller) {
    if (err) console.log("err:" + err);
    
    // res.send did not complete function without else condition !?!
    if (seller) {
      res.send(true);
    } else {
      res.send(false);
    }
  });

});

module.exports = router;