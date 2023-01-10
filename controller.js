import { contacts } from "./data.js";

function getContacts(req, res) {
  res.status(200).json(contacts);
}

function getContact(req, res) {
  const id = req.params.id;
  const contact = contacts.find((c) => c.id === id);
  if (contact === undefined) {
    res.status(200).json("Contact not found");
  } else {
    res.status(200).json(contact);
  }
}

export { getContacts, getContact };
