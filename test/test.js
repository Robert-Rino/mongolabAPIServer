'use strict';
let supertest = require('supertest');
let should = require('should');
let express = require('express');
let app = require('../app');

describe('Test Example', () => {
  it('should return api version', (done) => {
    supertest(app)
      .get('/api/v1')
      .expect(200, done);
  });
});
