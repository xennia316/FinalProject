app.get("/find-hotel", async (req, res) => {
  const hotelName = await req.body;

  const Hotel = await Hotels.findOne({ hotelName: hotelName });
  if (Hotel) {
    res.json({ message: `Your hotel: ${hotelName}`, data: Hotel });
  } else {
    res.send(`Your hotel ${hotelName} could not be found`);
  }
});
