const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
  
  email: String,
  password: String,
  businessName: String,
  businessCategory: String,
  businessStatus: String,
  aboutUs: String,
  address: {
    streetNumber: String,
    streetName: String,
    barangay: String,
    longitude: String,
    latitude: String
  },
  contactNumber: String,
  photos: [],
  reviews: [
    { type: mongoose.Types.ObjectId, ref: 'Ref'}
  ]

});

module.exports = mongoose.model('Business', BusinessSchema);