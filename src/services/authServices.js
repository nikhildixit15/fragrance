const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (data) => {
  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) {
    throw new Error("Email already registered");
  }
  const { name, email, password, phone, address } = data;
  //const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password,
    phone,
    address,
  });
  return user;
};

const login = async (data) => {
  const { email, password } = data;
  const user = await User.findOne({ email });
  if (!user) throw new Error("User Not Found");
  if (password !== user.password) throw new Error("Password Incorrect");
  //const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  return user;
};

module.exports = {
  login,
  register,
};
