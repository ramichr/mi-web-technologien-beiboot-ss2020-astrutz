const request = require('supertest');
const app = require('../app.js');
const assert = require('assert');

describe('HTTP Requests', function () {
    describe('GET /upload', function () {
        it('should return 200 status code', function () {
            return request(app)
                .get('/upload')
                .expect(200);
        });
        it('should return a html page', function () {
            return request(app)
                .get('/upload')
                .expect('Content-Type', 'text/html; charset=utf-8');
        });
    });
});