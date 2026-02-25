const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true }, // Cloudinary URL
    publicId: String, // Cloudinary public_id
    tag: String, // category tag (cricket, oud, etc)
  },
  { _id: false },
);
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      trim: true,
    },
    description: String,
    price: {
      type: Number,
      required: true,
    },
    originalPrice: Number,
    sizes: [
      {
        type: String, // "50ml", "100ml"
      },
    ],
    productType: {
      type: String,
      enum: ["perfume", "itra", "attar"],
      required: true,
    },

    genderCategory: {
      type: String,
      enum: ["male", "female", "unisex"],
      default: "unisex",
      required: true,
    },

    usageType: {
      type: String,
      enum: ["worship", "non-worship"],
      default: "non-worship",
      required: true,
    },

    badgetype: {
      type: String,
      enum: ["sale", "new", "bestseller"],
      default: "sale",
    },

    images: [imageSchema],

    stock: {
      type: Number,
      default: 0,
    },

    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Product", productSchema);
