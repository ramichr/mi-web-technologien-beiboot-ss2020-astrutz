const request = require('supertest');
const app = require('../app.js');
const assert = require('assert');

describe('HTTP GET /', function () {
    describe('Load site', function () {
        it('should return 200 status code', function () {
            return request(app)
                .get('/')
                .expect(200);
        });
        it('should return a html page', function () {
            return request(app)
                .get('/')
                .expect('Content-Type', 'text/html; charset=utf-8');
        });
    });
    describe('Load assets', function () {
        it('should load the CSS file', function () {
            return request(app)
                .get('/root.css')
                .expect(200);
        });
        it('should load the JS file', function () {
            return request(app)
                .get('/root.js')
                .expect(200);
        });
    });
});