const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
  
  email: String,
  password: String,
  businessName: String,
  businessCategory: String,
  businessStatus: String,
  contactNumber: String,
  aboutUs: String,
  streetNumber: String,
  streetName: String,
  barangay: String,
  longitude: String,
  latitude: String,
  photos: [],
  reviews: [
    { type: mongoose.Types.ObjectId, ref: 'Review'}
  ]

});

module.exports = mongoose.model('Business', BusinessSchema);