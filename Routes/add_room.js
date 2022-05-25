app.post("/add-room", async (req, res) => {
  const { size, price, number, type } = await req.body;
  const newRoom = await new RoomModel({ size, price, number, type });
  newRoom.save();
  res.json({ message: "Room added", data: newRoom });
});
