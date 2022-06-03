const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    town: {
      type: String,
      required: false,
    },
    password: {
      type: String,
    },
    permission: {
      type: Boolean,
    },
    wishList: {
      type: [String],
    },
    imageUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
