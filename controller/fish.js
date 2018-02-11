var 
  express = require('express'),
  router = express.Router(),
  Fish = require('../models/fish');

router.get("/", function(req, res) {
  Fish.find(function(err, fishes) {
    console.log(fishes);
    if (err) res.send(err);
    res.send(fishes)
  });
});

module.exports = router;