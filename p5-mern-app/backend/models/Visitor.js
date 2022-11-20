const mongoose = require('mongoose');

const VisitorSchema = new mongoose.Schema({

  email: String,
  password: String,
  firstName: String,
  lastName: String
  
}, { versionKey: false } );

module.exports = mongoose.model('Visitor', VisitorSchema);