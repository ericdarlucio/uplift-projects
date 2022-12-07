const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    contactNum: String,
    streetNum: String,
    streetName: String,
    barangay: String,
    orderQty: Number,
    orderStatus: String,
  },
  { timestamps: {
      createdAt: 'orderCreated',
      updatedAt: 'orderUpdated'
  }, versionKey: false }
);

module.exports = mongoose.model('Order', OrderSchema);