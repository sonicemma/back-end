const request = require('supertest');
const server = require('../api/server');
const Songs = require('./songs-router');

describe('songs router', function() {
    it('should run tests', function() {
        expect(true).toBe(true);
    })
    
    describe('GET /api/songs', function() {
        it('should return 200', function() {
            return request(server)
            .get("/api/songs")
            .then(res => {
              expect(res.status).toBe(200);
            })
        })
    })

    describe('GET /api/songs/savedSongs', function() {
        it('should return 200', function() {
            return request(server)
            .get("/api/songs")
            .then(res => {
              expect(res.status).toBe(200);
            })
        })
    })

    it("should return cohorts as the router value", function() {
        return request(server)
          .get("/api/songs")
          .then(res => {
            expect(Array.isArray(res.body)).toBe(true);
          });
    })

    it("should return cohorts as the router value", function() {
        return request(server)
          .get("/api/songs/savedSongs")
          .then(res => {
            expect(Array.isArray(res.body)).toBe(true);
          });
    })

    it("should return JSON formatted body", function() {
        return request(server)
          .get("/api/songs")
          .then(res => {
            expect(res.type).toMatch(/json/);
          });
    })

    it("should return JSON formatted body", function() {
        return request(server)
          .get("/api/songs/savedSongs")
          .then(res => {
            expect(res.type).toMatch(/json/);
          });
    })
})