'use strict';
let mongoose = require('mongoose');
let express = require('express');
let bodyParser = require('body-parser');

let app = express();

let routes = require('./routes/index.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  next();
});

app.use('/api/v1', routes);

module.exports = app;
