const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  dateIn: {
    type: Date,
    required: true,
  },
  dateOut: {
    type: Date,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  roomsNeeded: {
    type: Number,
    required: true,
  },
  contactDetails: { type: mongoose.ObjectId, ref: "users" },
});
