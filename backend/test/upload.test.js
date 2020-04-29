const request = require('supertest');
const app = require('../app.js');
const assert = require('assert');

//TODO: Write tests for image upload

describe('HTTP GET /upload', () => {
    describe('Load site', () => {
        it('should return 200 status code', () => {
            return request(app)
                .get('/upload')
                .expect(200);
        });
        it('should return a html page', () => {
            return request(app)
                .get('/upload')
                .expect('Content-Type', 'text/html; charset=utf-8');
        });
    });
    describe('Load assets', () => {
        it('should load the CSS file', () => {
            return request(app)
                .get('/upload.css')
                .expect(200);
        });
        it('should load the JS file', () => {
            return request(app)
                .get('/upload.js')
                .expect(200);
        });
    });
});