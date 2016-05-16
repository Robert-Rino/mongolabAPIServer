var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  action: { type: String, required: true },//有access/leave
  userId: { type: Number, required: true },
  page: { type: String, required: true },//頁面資訊
  courseId: { type: Number, required: true },
  chapterId: { type: Number, required: true },
  time: { type: Number, required: true }, });

var PageRecord = mongoose.model('pageRecord', schema);
module.exports = PageRecord;
