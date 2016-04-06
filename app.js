'use strict';
let mongoose = require('mongoose');
let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

const config = require('config');
const hasDBConfig = config.has('DB_CONFIG');

let dbConfig = null;
if (hasDBConfig) {
  dbConfig = config.get('DB_CONFIG.url');
}else {
  dbConfig = process.env.MONGOLAB_URI;
}

mongoose.connect(dbConfig);

let routes = require('./routes/index.js');
let pages = require('./routes/pages.js');
let cloud = require('./routes/cloud.js');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  next();
});

app.use('/', routes);
app.use('/page', pages);
app.use('/cloud', cloud);

module.exports = app;
