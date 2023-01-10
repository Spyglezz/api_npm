import express from "express";
import * as controller from "./controller.js";

const app = express();

app.get("/", function (req, res) {
  res.send("Raptor roooooooooar");
});

app.get("/api/contacts", controller.getContacts);

app.get("/api/contacts/:id", controller.getContact);

export default app;
