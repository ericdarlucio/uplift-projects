const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String
},{ versionKey: false });

module.exports = mongoose.model('Admin', AdminSchema);