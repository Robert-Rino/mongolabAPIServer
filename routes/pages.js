'use strict';
let express = require('express');
let router = express.Router();
let Joi = require('joi');
let mongoose = require('mongoose');

let schema = new mongoose.Schema({ action:String,//有access/leave
userId:Number,
userAccount:String,
page:String,//頁面資訊
description:String,
courseId:Number,
chapterId:Number,
time: { type: Date, default: Date.now }, });
let pageRecord = mongoose.model('pageRecord', schema);

/* GET /api/v1 return version */
router.post('/saveLog', (req, res) => {
  req.accepts('application/json');
  let action = req.body.action;
  let userId = req.body.userId;
  let userAccount = req.body.userAccount;
  let page = req.body.page;
  let description = req.body.description;
  let  courseId = req.body.courseId;
  let  chapterId = req.body.chapterId;

  res.json({
    version: 'v1',
  });
});
module.exports = router;
