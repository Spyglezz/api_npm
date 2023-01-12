import { contacts } from "./data.js";

function getContacts(req, res) {
  res.status(200).json(contacts);
}

function getContact(req, res) {
  const id = req.params.id;
  const contact = contacts.find((c) => c.id === id);
  if (contact === undefined) {
    res.status(404).send();
  } else {
    res.status(200).json(contact);
  }
}

function addContact(req, res) {
  const newContact = {
    nom: req.body.nom,
    telephone: req.body.telephone,
  };
  contacts.push(newContact);
  res.status(200).json(newContact);
}

function updateContact(req, res) {
  const updateContact = req.body;
  const idx = contacts.findIndex((contact) => contact.id == req.params.id);
  if (idx >= 0) {
    contacts[idx] = updateContact;
    res.send(updateContact);
  } else {
    res.status(404).send();
  }
}

function deletedContact(req, res) {
  const idx = contacts.findIndex((contact) => contact.id == req.params.id);
  if (idx >= 0) {
    const deletedContact = contacts.splice(idx, 1);
    res.send(deletedContact);
  } else {
    res.status(404).send();
  }
}

export { getContacts, getContact, addContact, updateContact, deletedContact };
