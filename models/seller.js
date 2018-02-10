var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SellerSchema = mongoose.Schema({
  id : Number, 
  phoneNumber : String,
  name : String, 
  password: String
});

module.exports = mongoose.model('Seller', SellerSchema);