var mongoose = require('mongoose');

var BuyerSchema = mongoose.Schema({
  id : Number, 
  companyName : String, 
  phoneNumber : String 
});

module.exports = mongoose.model("Buyer", BuyerSchema, "buyer");