const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
  deliveryName: String,
  deliveryStatus: String,
  orders: [
    { type: mongoose.Types.ObjectId, ref: 'Order'}
  ]
},
{ timestamps: {
    createdAt: 'deliveryCreated',
    updatedAt: 'deliveryUpdated'
}, versionKey: false }
);


module.exports = mongoose.model('Delivery', DeliverySchema);