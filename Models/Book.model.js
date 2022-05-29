const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
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
    userId: { type: mongoose.ObjectId, ref: "User" },
    hotelId: {
      type: mongoose.ObjectId,
      ref: "hotels",
    },
  },
  { timestamps: true }
);
const Book = mongoose.model("book", BookSchema);
module.exports = Book;
