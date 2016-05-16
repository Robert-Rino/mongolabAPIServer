var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  userId: { type: Number, required: true },
  courseId: { type: Number, required: true },
  chapterId: { type: Number, required: true },
  videoId: { type: Number, required: true },
  word: { type: String, required: true },
  time: { type: Number, required: true }, });

var Keyword = mongoose.model('keywordClick', schema);
module.exports = Keyword;
