const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const chatRoute = require("./routes/chatRoute");
const userMessages = require("./routes/messageRoute");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", userMessages);
app.get("/", (req, res) => {
  res.send("Hello World! Welcome to Social Media App");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri)
  .then(() =>
    console.log("MongoDB database connection established successfully")
  )
  .catch((error) => console.log("MongoDb connection error: ", error.message));
