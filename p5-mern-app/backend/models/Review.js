const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({

  comment: String,
  rating: {type: Number, min: 1, max: 5},
  author: {type: mongoose.Types.ObjectId, ref: 'Visitor'}
    
},
{ versionKey: false,
  timestamps: {
    createdAt: 'orderCreated',
    updatedAt: 'orderUpdated'
  }}
);

module.exports = mongoose.model('Review', ReviewSchema);