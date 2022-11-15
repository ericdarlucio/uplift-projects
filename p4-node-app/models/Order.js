const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    contactNum: String,
    streetNum: String,
    streetName: String,
    barangay: String,
    orderQty: Number
  },
  { timestamps: {
      createdAt: 'dateCreated',
      updatedAt: 'dateUpdated'
  }, versionKey: false }
);

module.exports = mongoose.model('Order', OrderSchema);