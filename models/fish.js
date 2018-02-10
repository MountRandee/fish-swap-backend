var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FishSchema = mongoose.Schema({
  id: Number,
  name: String
});

module.exports = mongoose.model('Fish', FishSchema);