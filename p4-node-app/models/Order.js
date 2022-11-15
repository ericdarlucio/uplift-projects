const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  contactNum: String,
  streetNum: String,
  streetName: String,
  barangay: String,
  orderQty: Number
});

module.exports = mongoose.model('Order', OrderSchema);