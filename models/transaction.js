var mongoose = require('mongoose');

var TransactionSchema = mongoose.Schema({
  date : String,
  sellerId : Number, 
  buyerId: Number,
  fishId: Number,
  countryId: Number,
  price: Number, 
  quantity: Number
},{
  versionKey: false 
});

module.exports = mongoose.model("Transaction", TransactionSchema, "transaction");