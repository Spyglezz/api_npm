import { contacts } from "./data.js";

function getContacts(req, res) {
  res.status(200).json(contacts);
}

function getContact(req, res) {
  const id = req.params.id;
  contacts.find(getContact());
  res.status(200).json({ id });
}

export { getContacts, getContact };
