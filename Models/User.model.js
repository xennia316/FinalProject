const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    town: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    permission: {
      type: Boolean,
    },
    wishList: {
      type: [String],
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
