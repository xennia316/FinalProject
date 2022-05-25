const route = require("Router");

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
