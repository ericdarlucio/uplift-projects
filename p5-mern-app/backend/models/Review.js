const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  comment: String,
  rating: {type: Number, min: 1, max: 5},
  author: {type: mongoose.Types.ObjectId, ref: 'Visitor'},
  business: {type: mongoose.Types.ObjectId, ref: 'Business'}
});

module.exports = mongoose.model('Review', ReviewSchema);