const mongoose = require('mongoose');

const VisitorSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String
});

module.exports = mongoose.model('Visitor', VisitorSchema);
