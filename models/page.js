'use strict';
let mongoose = require('mongoose');

let schema = new mongoose.Schema({
action:{ type: String, required: true },//有access/leave
userId:{ type: Number, required: true },
page:{ type: String, required: true },//頁面資訊
courseId:{ type: Number, required: true },
chapterId:{ type: Number, required: true },
time:{ type: Number, required: true }, });
let PageRecord = mongoose.model('pageRecord', schema);

module.exports = PageRecord;
