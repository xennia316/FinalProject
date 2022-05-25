const express = require("express");
const RoomModel = require("../Models/Room.model");
const router = express.Router();

router.post("/add-room", async (req, res) => {
  const { category, price, number, type, hotelId } = await req.body;
  const newRoom = await new RoomModel({
    category,
    price,
    number,
    type,
    hotelId,
  });
  newRoom.save();
  res.json({
    message: "Room added",
    data: newRoom,
  });
});

module.exports = router;
