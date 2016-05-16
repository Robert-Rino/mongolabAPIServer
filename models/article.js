var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  action: String,//post or reply
  userName: String,
  userId: Number,
  userAccount: String,
  courseId: Number,
  chapterId: Number,
  discussion_id: Number,
  title: String,
  text_content: String,
  source: String,
  object_article_info: {
    article_id: Number,
    article_author_id: Number,
    article_type: String,
    article_course_id: Number,
    article_chapter_id: Number,
  },
  time: { type: Date, default: Date.now },
});

var Article = mongoose.model('article_models', schema);
module.exports = Article;
