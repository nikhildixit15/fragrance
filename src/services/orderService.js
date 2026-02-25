const Order = require("../model/Order");

const createOrder = async (data) => {
  const order = await Order.create(data);
  return order;
};

const getUserOrders = async (id) => {
  const orders = await Order.find({ userId:id});
  return orders;
};

module.exports = {
    createOrder, getUserOrders
}