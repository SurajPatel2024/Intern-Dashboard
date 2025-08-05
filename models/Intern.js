const mongoose = require('mongoose');

const internSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  referralCode: String,
  donationsRaised: Number,
  rewards: [String],
});

module.exports = mongoose.model('Intern', internSchema);
