'use strict';
let mongoose = require('mongoose');

let schema = new mongoose.Schema({
userId:{ type: Number, required: true },
courseId:{ type: Number, required: true },
chapterId:{ type: Number, required: true },
videoId:{ type: Number, required: true },
word:{ type: String, required: true },
time:{ type: Number, required: true }, });
let Keyword = mongoose.model('keywordClick', schema);

module.exports = Keyword;
