const express = require("express");
const {
  addProduct,
  updateProduct,
  getProducts,
  getSingleProduct,
} = require("../services/productServices");
const router = express.Router();

router.get("/getProduct", async (req, res) => {
  try {
    const product = await getProducts(req.body);
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
router.get("/getSingleProduct", async (req, res) => {
  try {
    const product = await getSingleProduct(req.body);
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
router.post("/addProduct", async (req, res) => {
  try {
    const product = await addProduct(req.body);
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
router.put("/updateProduct", async (req, res) => {
  try {
    const product = await updateProduct(req.body);
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

module.exports = router;
