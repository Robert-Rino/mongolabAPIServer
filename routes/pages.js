'use strict';
let express = require('express');
let router = express.Router();
let moment = require('moment');

const debug = require('debug')('page');

let PageRecord = require('../models/page.js');

router.post('/sPage', (req, res, err) => {
  req.accepts('application/json');
  let data = req.body;
  let nowTime = moment().unix();
  let record = new PageRecord({
    action:data.action,
    userId:data.userId,
    courseId:data.courseId,
    page:data.page,
    chapterId:data.chapterId,
    time:nowTime,
  });
  record.save((err)=> {
    if (err) {
      debug(`Error while saving data to MongoDB: ${err} `);
      return res.sendStatus(400);
    }

    res.status(201).send({ _id: record._id, });
  });
});

// can't remove with object id bug
router.post('/rPage', (req, res, err) => {
  console.log('rpage');
  let data = req.body;
  let targetId = data._id;
  let record = new PageRecord();
  record.remove({ _id:targetId, }, (err) => {
    if (err) {
      debug(`Error while removing data from MongoDB: ${err} `);
      return res.sendStatus(410);
    }

    res.sendStatus(200);
  });
});

module.exports = router;
