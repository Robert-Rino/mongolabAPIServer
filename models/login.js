var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  action: String,
  userId: Number,
  userAccount: String,
  time: { type: Date, default: Date.now },
});

var Login = mongoose.model('login_records', schema);
module.exports = Login;
