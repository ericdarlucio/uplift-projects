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
    delivery: {
      type: mongoose.Types.ObjectId,
      ref: 'Delivery'
    }
  },
  { timestamps: {
      createdAt: 'dateCreated',
      updatedAt: 'dateUpdated'
  }, versionKey: false }
);

module.exports = mongoose.model('Order', OrderSchema);