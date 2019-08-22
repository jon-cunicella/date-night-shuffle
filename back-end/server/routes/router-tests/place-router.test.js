const request = require("supertest");
const Place = require("../../models/place-model");
const app = require("../../../app");

jest.mock("../../models/place-model", () => {
  return {
    create: jest.fn(() => {}),
    find: jest.fn(() => []),
    findOne: jest.fn(() => {}),
    findByIdAndUpdate: jest.fn(() => {}),
    remove: jest.fn(() => {})
  };
});

describe("Place Router", () => {
  describe("create Place route", () => {
    test("should get a 200 status and call 'Place.create()' and 'Place.find()' one(1) time each", done => {
      request(app)
        .post("/api/places")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Place.create.mock.calls.length).toEqual(1);
          expect(Place.find.mock.calls.length).toEqual(1);
        });

      Place.create.mockReset();
      Place.find.mockReset();
      done();
    });
  });

  describe("get Places route", () => {
    test("should get a 200 status and call 'Place.find()' one(1) time", done => {
      request(app)
        .get("/api/places")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Place.find.mock.calls.length).toEqual(1);
        });

      Place.find.mockReset();
      done();
    });
  });

  describe("get Place route", () => {
    test("should get a 200 status and call 'Place.findOne()' one(1) time", done => {
      request(app)
        .get("/api/places/:id")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Place.findOne.mock.calls.length).toEqual(1);
        });

      Place.findOne.mockReset();
      done();
    });
  });

  describe("update Place route", () => {
    test("should get a 200 status and call 'Place.findByIdAndUpdate()' one(1) time", done => {
      request(app)
        .put("/api/places/:id")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Place.findByIdAndUpdate.mock.calls.length).toEqual(1);
        });

      Place.findByIdAndUpdate.mockReset();
      done();
    });
  });

  describe("delete Place route", () => {
    test("should get a 200 status and call 'Place.remove()' one(1) time", done => {
      request(app)
        .delete("/api/places/:id")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Place.remove.mock.calls.length).toEqual(1);
        });

      Place.remove.mockReset();
      done();
    });
  });

  describe("add Places to Place route", () => {
    test("should get a 200 status and call and 'Place.findOne()' one(1) time", done => {
      request(app)
        .put("/api/places/:id/addPlaces")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Place.findOne.mock.calls.length).toEqual(1);
        });

      Place.findOne.mockReset();
      done();
    });
  });
});
