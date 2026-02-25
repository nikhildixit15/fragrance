const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderNumber: String,

    customer: {
      userId: mongoose.Schema.Types.ObjectId,
      name: String,
      email: String,
      phone: String,
    },

    shippingAddress: {
      fullName: String,
      phone: String,
      addressLine1: String,
      addressLine2: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },

    items: [
      {
        productId: mongoose.Schema.Types.ObjectId,
        name: String,
        image: String,
        price: Number,
        quantity: Number,
        total: Number,
      },
    ],

    pricing: {
      subtotal: Number,
      shippingFee: Number,
      tax: Number,
      discount: Number,
      totalAmount: Number,
    },

    payment: {
      method: String,
      status: String,
      transactionId: String,
      paidAt: Date,
    },

    orderStatus: {
      status: { type: String, default: "pending" },
      updatedAt: Date,
    },
  },
  { timestamps: true }
); 

module.exports = mongoose.model("Order", orderSchema);