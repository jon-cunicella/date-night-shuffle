const request = require("supertest");
const Area = require("../../models/area-model");
const app = require("../../../app");

jest.mock("../../models/area-model", () => {
  return {
    create: jest.fn(() => {}),
    find: jest.fn(() => []),
    findOne: jest.fn(() => {}),
    findByIdAndUpdate: jest.fn(() => {}),
    remove: jest.fn(() => {})
  };
});

describe("Area Router", () => {
  describe("create Area route", () => {
    test("should get a 200 status and call 'Area.create()' and 'Area.find()' one(1) time each", done => {
      request(app)
        .post("/api/areas")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Area.create.mock.calls.length).toEqual(1);
          expect(Area.find.mock.calls.length).toEqual(1);
          done();
        });

      Area.create.mockReset();
      Area.find.mockReset();
    });
  });

  describe("get Areas route", () => {
    test("should get a 200 status and call and 'Area.find()' one(1) time", done => {
      request(app)
        .get("/api/areas")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Area.find.mock.calls.length).toEqual(1);
          done();
        });

      Area.find.mockReset();
    });
  });

  describe("get Area route", () => {
    test("should get a 200 status and call and 'Area.findOne()' one(1) time", done => {
      request(app)
        .get("/api/areas/:id")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Area.findOne.mock.calls.length).toEqual(1);
          done();
        });

      Area.findOne.mockReset();
    });
  });

  describe("update Area route", () => {
    test("should get a 200 status and call and 'Area.findByIdAndUpdate()' one(1) time", done => {
      request(app)
        .put("/api/areas/:id")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Area.findByIdAndUpdate.mock.calls.length).toEqual(1);
          done();
        });

      Area.findByIdAndUpdate.mockReset();
    });
  });

  describe("delete Area route", () => {
    test("should get a 200 status and call and 'Area.remove()' one(1) time", done => {
      request(app)
        .delete("/api/areas/:id")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Area.remove.mock.calls.length).toEqual(1);
          done();
        });

      Area.remove.mockReset();
    });
  });

  describe("add Places to Area route", () => {
    test("should get a 200 status and call and 'Area.findOne()' one(1) time", done => {
      request(app)
        .put("/api/areas/:id/addPlaces")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Area.findOne.mock.calls.length).toEqual(1);
          done();
        });

      Area.findOne.mockReset();
    });
  });
});
