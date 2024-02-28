const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World! Welcome to Social Media App");
});
const port = process.env.PORT || 4000;
const uri = process.env.ATLAS_URI;
app.listen(4000, (_request, _respond) => {
  console.log(`Server is running on port: ${port}`);
});

mongoose
  .connect(uri)
  .then(() =>
    console.log("MongoDB database connection established successfully")
  )
  .catch((error) => console.log("MongoDb connection error: ", error.message));
