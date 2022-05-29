const express = require("express");
const router = express.Router();

const BookModel = require("../Models/Book.model");

router.post("/book-hotel", async (req, res) => {
  const { dateIn, dateOut, guests, roomsNeeded, userId, hotelId } =
    await req.body;
  const booked = await new BookModel({
    dateIn,
    dateOut,
    guests,
    roomsNeeded,
    userId,
    hotelId,
  });
  booked.save();
  res.json({ message: "Successfully booked hotel", data: booked });
});

router.post("/find-books", async (req, res) => {
  const { userId } = req.body;
  const books = await BookModel.find({ userId })
    .populate({
      path: "userId",
      select: "-password",
    })
    .populate("hotelId");

  books
    ? res.json({ message: "books found", data: books })
    : res.json({ message: "no booked hotel found" });
});

module.exports = router;
