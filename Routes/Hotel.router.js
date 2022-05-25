const express = require("express");
const router = express.Router();

const HotelModel = require("../Models/Hotel.model");
const Hotels = require("../Models/Hotel.model");

router.post("/add-hotel", async (req, res) => {
  const { name, town, evaluation, recommendation, contact } = await req.body;
  const newHotel = await new HotelModel({
    name,
    town,
    evaluation,
    recommendation,
    contact,
  });
  newHotel.save();
  res.json({ message: "Your hotel has been created", data: newHotel });
});

router.post("/find-hotelname", async (req, res) => {
  const { name } = await req.body;

  const Hotel = await Hotels.findOne({ name });
  if (Hotel) {
    res.json({ message: `Your hotel: ${name}`, data: Hotel });
  } else {
    res.send(`Your hotel ${name} could not be found`);
  }
});

router.post("/find-hoteltown", async (req, res) => {
  const { town } = await req.body;

  const Hotel = await Hotels.find({ town });
  if (Hotel) {
    res.json({ message: `Your hotel: ${town}`, data: Hotel });
  } else {
    res.send(`Your hotel ${town} could not be found`);
  }
});

module.exports = router;
