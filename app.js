'use strict';
let mongoose = require('mongoose');
let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

let app = express();

let routes = require('./routes/index.js');

// let pages = require('.routes/pages.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  next();
});

app.use('/', routes);
app.use('/api/v1', routes);

module.exports = app;
