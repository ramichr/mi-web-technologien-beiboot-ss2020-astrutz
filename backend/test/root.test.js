const request = require('supertest');
const app = require('../app.js');
const assert = require('assert');

describe('HTTP GET /', () => {
    describe('Load site', () => {
        it('should return 200 status code', () => {
            return request(app)
                .get('/')
                .expect(200);
        });
        it('should return a html page', () => {
            return request(app)
                .get('/')
                .expect('Content-Type', 'text/html; charset=utf-8');
        });
    });
    describe('Load assets', () => {
        it('should load the CSS file', () => {
            return request(app)
                .get('/root.css')
                .expect(200);
        });
        it('should load the JS file', () => {
            return request(app)
                .get('/root.js')
                .expect(200);
        });
    });
});