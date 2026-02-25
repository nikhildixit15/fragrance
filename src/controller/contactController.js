const express = require("express");
const router = express.Router();
const { createContact, getContact } = require("../services/contactService");

router.post("/createContact", async (req, res) => {
  try {
    const product = await createContact(req.body);
    res.status(200).json({
      message: "Contact Successfully",
      product,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.get("/getContact", async (req, res) => {
  try {
    const product = await getContact(req.body);
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || "Server error",
    });
  }
});

router.get("/getContactByDate", async (req, res) => {
  try {
    const { date } = req.query;
    const product = await getContactByDate(date);
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || "Server error",
    });
  }
});
