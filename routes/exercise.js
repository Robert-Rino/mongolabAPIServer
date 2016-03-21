'use strict';
let express = require('express');
let router = express.Router();
let moment = require('moment');

const debug = require('debug')('exercise');

let ExerciseRecord = require('../models/exercise.js');

router.get('/', (req, res, err) => {
  res.status(200).send('this is exercise route');
});

module.exports = router;
