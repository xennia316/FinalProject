const express = require("express");
const User = require("../Models/User.model");
const router = express.Router();

const UserModel = require("../Models/User.model");

router.post("/sign-up", async (req, res) => {
  const { name, email, town, password } = await req.body;
  const newUser = await new UserModel({
    name,
    email,
    town,
    password,
    permission: false,
  });
  newUser.save();
  res.json({ message: `Welcome ${newUser.name}`, data: newUser });
});

router.post("/login", async (req, res) => {
  const { name, password } = await req.body;
  const found = await User.findOne({ name, password });
  if (found) {
    res.json({ message: `Welcome ${found.name}`, data: found });
  } else {
    res.json({ message: "not found" });
  }
});

module.exports = router;
