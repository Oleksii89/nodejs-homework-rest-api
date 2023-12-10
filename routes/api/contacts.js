const express = require("express");
const {
  listContacts,
  addContact,
  getContactById,
  removeContact,
} = require("../../models/contacts");

const router = express.Router();

// const HttpError = (status, message) => {
//   const error = new Error(message);
//   return error;
// };

router.get("/", async (req, res, next) => {
  const result = await listContacts();
  res.status(200).json(result);
});

router.get("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId);
  res.status(200).json(result);
});

router.post("/", async (req, res, next) => {
  const result = await addContact(req.body);
  res.status(201).json(result);
});

router.delete("/:contactId", async (req, res, next) => {
  // const { contactId } = req.params;
  // const result = await removeContact(contactId, req.body);
  // if (!result) {
  //   res.json(404, "Not found");
  // }
  // res.json({
  //   message: "contact deleted",
  // });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
