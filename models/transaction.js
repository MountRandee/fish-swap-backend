var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = mongoose.Schema({
  date : String,
  sellerId : String, 
  buyerId: String,
  fishId: Number,
  countryId: Number,
  price: Number, 
  quantity: Number
});

module.exports = mongoose.model('Transaction', TransactionSchema);