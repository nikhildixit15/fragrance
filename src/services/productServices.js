const Product = require("../model/Product");

const addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};

const getProducts = async () => {
  const products = await Product.find();
  res.json(products);
};

const getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};

const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(product);
};

module.exports = {
  addProduct,getProducts,getSingleProduct,updateProduct
}
