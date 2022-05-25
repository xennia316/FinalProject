const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
  },
  hotelId: { type: mongoose.ObjectId, ref: "hotels" },
});

const Room = mongoose.model("room", RoomSchema);

module.exports = Room;
