import express from "express";
const app = express();

const contacts = [
  {
    nom: "Raptor",
    telephone: "02I5902582"
  },
  {
    nom: "Troodon",
    telephone: "02I5902582"
  }
];

app.get("/", function (req, res) {
  res.send("Raptor roooooooooar");
});

app.get("/api/contacts", function (req, res) {
  res.status(200).json(contacts);
});

app.get("/api/contacts/:id", function (req, res) {
  const id = req.params.id;
  res.status(200).json({ id });
});

export default app;
