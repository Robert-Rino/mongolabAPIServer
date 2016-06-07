'use strict';
let express = require('express');
let router = express.Router();
let moment = require('moment');

const debug = require('debug')('page');

let PageRecord = require('../models/page.js');

router.post('/savePage', (req, res, err) => {
  req.accepts('application/json');
  let data = req.body;
  let nowTime = moment().unix();
  let record = new PageRecord({
    action: data.action,
    userId: data.userId,
    courseId: data.courseId,
    page: data.page,
    chapterId: data.chapterId,
    time: nowTime,
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
router.post('/removetestPage', (req, res, err) => {
  PageRecord.find().remove({ page: 'test page', }, (err, result) => {
    if (err) {
      debug(`Error while removing data from MongoDB: ${err} `);
      return res.sendStatus(500);
    }

    res.status(200).send(result);
  });
});

router.post('/readPage', (req, res, err) => {
  let data = req.body;
  let userId = data.userId;
  let courseId = data.courseId;
  PageRecord.
  find().
  where('userId').equals(userId).
  where('courseId').equals(courseId).
  sort('time').
  select('_id action chapterId').
  exec((err, result) => {
    if (err) {
      debug(`Error while removing data from MongoDB: ${err} `);
      return res.sendStatus(410);
    }

    res.status(200).send(result);
  });
});

module.exports = router;
