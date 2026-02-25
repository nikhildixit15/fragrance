const express = require("express");
const { register, login } = require("../services/authServices");
const router = express.Router();
 

router.post("/signup", async (req, res) => {
  try {
    console.log("SignUp", req.body)
    const product = await register(req.body);
    res.status(200).json({
      message: "Register successfully",
      product,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const product = await login(req.body);
    res.status(200).json({
      message: "Login successfully",
      product,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router