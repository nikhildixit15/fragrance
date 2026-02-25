const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  showPass:String,
  phone: String,
  address: String,
  role: {
    type: String,
    enum: ["customer", "admin", "seller"],
    default: "customer",
  },
});

module.exports = mongoose.model("User", userSchema);