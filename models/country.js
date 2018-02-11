var mongoose = require('mongoose');

var CountrySchema = mongoose.Schema({
  id: Number,
  name: String
});

module.exports = mongoose.model("Country", CountrySchema, "country");