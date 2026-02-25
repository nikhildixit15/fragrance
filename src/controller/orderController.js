const express = require("express");
const { getUserOrders, createOrder } = require("../services/orderService");
const router = express.Router();

router.post("/createOrder", async (req, res) => {
  try {
    const product = await createOrder(req.body);
    res.status(200).json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || "Server error",
    });
  }
});
router.get("/getUserOrder", async (req, res) => {
  try {
    const product = await getUserOrders(req.body);
    res.status(200).json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || "Server error",
    });
  }
});


module.exports = router