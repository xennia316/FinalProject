const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  size: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
  },
});

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;
