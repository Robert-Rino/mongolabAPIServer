'use strict';
let supertest = require('supertest');
let should = require('should');
let express = require('express');
let app = require('../app');

describe('Test Example', () => {
  it('should return api version', function (done) {
    supertest(app)
      .get('/')
      .expect(200, done);
  });
});

describe('test api-v1/page/savePage', () => {
  it('should return 201', function (done) {
    this.timeout(5000);
    let data = {
      action:'access',
      userId:123,
      courseId:6,
      page:'test page',
      chapterId:666,
    };

    supertest(app)
      .post('/api-v1/page/savePage')
      .send(data)
      .expect(201, done);
  });
});

describe('test api-v1/page/readPage', () => {
  it('should return 200', function (done) {
    let data = {
      userId:123,
      courseId:6,
    };

    supertest(app)
      .post('/api-v1/page/readPage')
      .send(data)
      .expect(200, done);
  });
});

describe('test api-v1/page/removeTestPage', () => {
  it('should affect one line and return 200', function (done) {

    supertest(app)
      .post('/api-v1/page/removeTestPage')
      .expect(200, done);
  });

  it('should affect zero line and return 200', function (done) {

    supertest(app)
      .post('/api-v1/page/removeTestPage')
      .expect(function (res) {
        res.body.n = 0;
      })
      .expect(200, done);
  });
});
