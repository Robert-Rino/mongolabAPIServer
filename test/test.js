'use strict';
let supertest = require('supertest');
let should = require('should');
let express = require('express');
let app = require('../app');

describe('Test Example', () => {
  it('should return api version', function(done) {
    supertest(app)
      .get('/')
      .expect(200, done);
  });
});
