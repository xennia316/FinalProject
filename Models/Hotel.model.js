const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    town: {
      type: String,
      required: true,
    },
    evaluation: {
      type: Number,
      required: true,
    },
    recommendation: {
      type: Boolean,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Hotels = mongoose.model("Hotels", HotelSchema);

module.exports = Hotels;
