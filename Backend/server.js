// Dependencies used
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// Database connection
const DB =
  "mongodb+srv://Sonia:<password>@cluster0.hcmtn.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected..");
  });

// Initializing node frameworks
app.use(express.json());
app.use(cors());

// Declaring port number
const PORT = 8080;

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
