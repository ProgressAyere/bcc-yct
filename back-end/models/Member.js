const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  campus: { type: String, required: true },
  interest: { type: String, required: true },
  joinedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Member', memberSchema);
