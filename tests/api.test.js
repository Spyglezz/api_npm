import request from "supertest";
import app from "../app.js";

describe("Test the root path", () => {
  test("It should respond to the GET method", () => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
describe("Test the api/contacts path", () => {
  test("should return code status 200", () => {
    request(app)
      .get("/api/contacts")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test("should return nom key in reponse", () => {
    request(app)
      .get("/api/contacts")
      .then((response) => {
        expect(response.body[0].nom).toBe("Raptor");
      });
  });
});

describe("Test the api/contacts/id path", () => {
  test("should return code status 200", () => {
    request(app)
      .get("/api/contacts/:id")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test("should the key id in response", () => {
    request(app)
      .get("/api/contacts/:id")
      .then((response) => {
        expect(response.body[0].id).toBe("1");
      });
  });
});
