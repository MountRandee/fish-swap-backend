var mongoose = require('mongoose');

var PricesSchema = mongoose.Schema({
  date : String,
  countryId: Number,
  fishId: Number,
  min: Number,
  max: Number,
  average: Number
});

module.exports = mongoose.model("Prices", PricesSchema, "prices");