var 
  express = require('express'),
  router = express.Router(),
  Country = require('../models/country');

router.get("/", function(req, res) {
  Country.find(function(err, countries) {
    console.log(countries);
    if (err) res.send(err);
    res.send(countries)
  });
});

module.exports = router;