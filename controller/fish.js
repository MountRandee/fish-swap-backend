var 
  express = require('express'),
  router = express.Router(),
  Fish = require('../models/fish');

router.get("/", function(req, res) {
  Fish.find(function(err, fishes) {
    if (err) {
      console.log(err);
      return res.status(500).send(false);
    }
    return res.status(200).send(fishes)
  });
});

module.exports = router;