const request = require('supertest');
const app = require('../app.js');
const assert = require('assert');

describe('HTTP GET /overview', function () {
    describe('Load site', function () {
        it('should return 200 status code', function () {
            return request(app)
                .get('/overview')
                .expect(200);
        });
        it('should return a html page', function () {
            return request(app)
                .get('/overview')
                .expect('Content-Type', 'text/html; charset=utf-8');
        });
    });
    describe('Load assets', function () {
        it('should load the CSS file', function () {
            return request(app)
                .get('/overview.css')
                .expect(200);
        });
        it('should load the JS file', function () {
            return request(app)
                .get('/overview.js')
                .expect(200);
        });
    });
});