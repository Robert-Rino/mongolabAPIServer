'use strict';
let express = require('express');
let router = express.Router();
let moment = require('moment');

let Keyword = require('../models/keyword.js');

/* GET /api/v1 return version */
router.post('/saveLog', (req, res, err) => {
  // if (err) {
  //   console.log('schema validation fail');
  //   return res.sendStatus(400);
  // }

  req.accepts('application/json');
  let data = req.body;
  let nowTime = moment().unix();
  let record = new Keyword({
    userId:data.userId,
    courseId:data.courseId,
    chapterId:data.chapterId,
    videoId:data.videoId,
    word:data.keyword,
    time:nowTime,
  });

  record.save((err)=> {
    if (err) {
      return console.error('Error while saving data to MongoDB: ' + err);
    }

    res.sendStatus(201);
  });
}
);
module.exports = router;
