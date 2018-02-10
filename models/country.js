var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CountrySchema = mongoose.Schema({
  id: Number,
  name: String
});

module.exports = mongoose.model('Country', CountrySchema);