const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const imageRoutes = require("./imageRoutes");
require("dotenv").config();

const app = express();
app.use(cors());

// MongoDB setup
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes setup
app.use("/", imageRoutes);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
