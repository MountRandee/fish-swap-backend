var mongoose = require('mongoose');

var TransactionSchema = mongoose.Schema({
  date : String,
  sellerId : String, 
  buyerId: String,
  fishId: Number,
  countryId: Number,
  price: Number, 
  quantity: Number
});

module.exports = mongoose.model("Transaction", TransactionSchema, "transaction");