const express = require("express");
const router = express.Router();

const productController = require("./productController");
const authController = require("./authController");
const orderController = require("./orderController");

router.use("/product", productController);
router.use("/login", authController);
// router.use("/order", orderController);

module.exports = router;
