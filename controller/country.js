var 
  express = require('express'),
  router = express.Router(),
  Country = require('../models/country');

router.get("/", function(req, res) {
  Country.find(function(err, countries) {
    if (err) {
      console.log(err);
      return res.status(500).send(false);
    }
    return res.status(200).send(countries)
  });
});

module.exports = router;