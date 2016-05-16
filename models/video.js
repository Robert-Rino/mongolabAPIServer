var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  action: String,//有play/pause/seek/leave/complete
  userId: Number,
  userAccount: String,//使用者email
  videoStartTime: Number,
  videoEndTime: Number,
  videoId: Number,
  videoTotalTime: Number,
  courseId: Number,
  chapterId: Number,
  chapterVideoCount: Number,//章節影片個數
  chapterVideoOrder: Number,//章節的第幾個影片
  playRate: Number,// 播放速度
  source: String,
  time: { type: Date, default: Date.now },
});

var Video = mongoose.model('video_records', schema);
module.exports = Video;
