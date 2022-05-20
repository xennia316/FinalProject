const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  email: {
    type: email,
    required: true,
  },
  town: {
    type: String,
    required: false,
  },
  password: {
    type: password,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
