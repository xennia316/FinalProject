// Dependencies used
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const HotelRouter = require("./Routes/Hotel.router");
const UserRouter = require("./Routes/User.router");
const BookRouter = require("./Routes/Book.router");

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

app.use("/api/hotel", HotelRouter);
app.use("/api/user", UserRouter);
app.use("/api/book", BookRouter);

// Declaring port number
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
