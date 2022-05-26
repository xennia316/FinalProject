const express = require("express");
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

module.exports = router;
