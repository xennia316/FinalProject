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
    ownerID: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Hotels = mongoose.model("hotels", HotelSchema);

module.exports = Hotels;
