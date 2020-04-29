const request = require('supertest');
const app = require('../app.js');
const assert = require('assert');

describe('HTTP GET /overview',  () => {
    describe('Load site', () => {
        it('should return 200 status code', () => {
            return request(app)
                .get('/overview')
                .expect(200);
        });
        it('should return a html page', () => {
            return request(app)
                .get('/overview')
                .expect('Content-Type', 'text/html; charset=utf-8');
        });
    });
    describe('Load assets', () => {
        it('should load the CSS file', () => {
            return request(app)
                .get('/overview.css')
                .expect(200);
        });
        it('should load the JS file', () => {
            return request(app)
                .get('/overview.js')
                .expect(200);
        });
    });
});