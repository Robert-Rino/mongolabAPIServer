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

describe('test api-v1/page/sPage', () => {
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
      .post('/api-v1/page/sPage')
      .send(data)
      .expect(201, done);
  });
});
