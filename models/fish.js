var mongoose = require('mongoose');

var FishSchema = mongoose.Schema({
  id: Number,
  name: String
});

module.exports = mongoose.model("Fish", FishSchema, "fish");