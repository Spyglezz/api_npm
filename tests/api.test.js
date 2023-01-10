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

describe("Contacts API", () => {
  let contacts;

  beforeEach(() => {
    contacts = [
      { id: "1", nom: "Raptor", telephone: "02I5902582" },
      { id: "2", nom: "Troodon", telephone: "02I5902582" },
      { id: "3", nom: "Carnotaure", telephone: "02I5902582" },
      { id: "4", nom: "Allosaure", telephone: "02I5902582" },
    ];
  });

  test("GET /contacts", async () => {
    const response = await request(app).get("/api/contacts");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe(contacts);
  });

  test("POST /contacts", async () => {
    const newContact = { id: "5", nom: "Brontosaure", telephone: "02I5902582" };
    const response = await request(app).post("/api/contacts").send(newContact);
    console.log(response);
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe(newContact);
  });

  test("PUT /contacts/:id", async () => {
    const updateContact = {
      id: "1",
      nom: "Triceratops",
      telephone: "02I5902582",
    };
    const response = await request(app)
      .put("/api/contacts/1")
      .send(updateContact);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ updateContact });
  });

  test("DELETE /contacts/:id", async () => {
    const response = await request(app).delete("/contacts/1");
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual([
      { id: "1", nom: "Raptor", telephone: "02I5902582" },
    ]);
  });
});

// describe("Test the api/contacts path", () => {
//   test("should return code status 200", () => {
//     request(app)
//       .get("/api/contacts")
//       .then((response) => {
//         expect(response.statusCode).toBe(200);
//       });
//   });
//   test("should return nom key in reponse", () => {
//     request(app)
//       .get("/api/contacts")
//       .then((response) => {
//         expect(response.body[0].nom).toBe("Raptor");
//       });
//   });
// });

// describe("Test the api/contacts/id path", () => {
//   test("should return code status 200", () => {
//     request(app)
//       .get("/api/contacts/2")
//       .then((response) => {
//         expect(response.statusCode).toBe(200);
//       });
//   });
//   test("should the key id in response", () => {
//     request(app)
//       .get("/api/contacts/1")
//       .then((response) => {
//         expect(response.body[0].id).toBe("1");
//       });
//   });
//   test("should the key nom in response", () => {
//     request(app)
//       .post("/api/contacts/1")
//       .send({ nom: "Troodon" })
//       .then((response) => {
//         expect(response.body[0].nom).toBe("Troodon");
//       });
//   });
// });
