const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  category: {
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
  Picture: {
    type: String,
  },
});

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;
