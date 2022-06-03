const express = require("express");
const User = require("../Models/User.model");
const router = express.Router();

const UserModel = require("../Models/User.model");

router.post("/sign-up", async (req, res) => {
  const { name, email, town, password, imageUrl, wishList } = await req.body;
  const newUser = await new UserModel({
    name,
    email,
    town,
    password,
    permission: false,
    imageUrl,
    wishList: [],
  });
  newUser.save();
  res.json({ message: `Welcome ${newUser.name}`, data: newUser });
});

router.post("/login", async (req, res) => {
  const { email, password } = await req.body;
  const found = await User.findOne({ email, password });
  if (found) {
    res.json({ message: `Welcome ${found.email}`, data: found });
  } else {
    res.json({ message: "not found" });
  }
});

router.put("/update-user", async (req, res) => {
  const { _id, wishList } = req.body;
  const updatedUser = await UserModel.findOneAndUpdate({ _id }, { wishList });
  updatedUser.save();

  res.json({ message: "found and updated user", data: updatedUser });
});
module.exports = router;
