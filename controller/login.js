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
    res.send(null);
  }
  Seller.findOne({"phoneNumber": phoneNumber, "password": password}, "phoneNumber", function (err, seller) {
    if (err) res.send(err);
    console.log(seller);
  });
});

module.exports = router;