// Dependencies used
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const HotelModel = require("./Models/Hotel.model");
const RoomModel = require("./Models/Room.model");
const Hotels = require("./Models/Hotel.model");
require("dotenv").config();

// Database connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected..");
  })
  .catch(() => {
    console.log("Unable to connect to database ...");
  });

// Initializing node frameworks
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.post("/add-hotel", async (req, res) => {
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

// Searching a hotel by Name
app.get("/find-hotel", async (req, res) => {
  const hotelName = await req.body;

  const Hotel = await Hotels.findOne({ hotelName: hotelName });
  if (Hotel) {
    res.json({ message: `Your hotel: ${hotelName}`, data: Hotel });
  } else {
    res.send(`Your hotel ${hotelName} could not be found`);
  }
});

// Declaring port number
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
