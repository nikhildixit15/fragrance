const express = require("express");
const router = express.Router();
const sendEmail = require("../services/emailService")

router.post("/sendMail", async (req, res) => {
  try {
    console.log("@@@", req.body);
    const response = await sendEmail(req.body);
     res.status(201).json({
      success: true,
      message: "Send Message successfully",
      data: response,
    });
  } catch (e) {
     res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});