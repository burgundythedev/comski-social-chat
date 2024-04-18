const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http"); // Import http module
const userRoute = require("./routes/userRoute");
const chatRoute = require("./routes/chatRoute");
const userMessages = require("./routes/messageRoute");

// Set up Express
const app = express();
app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin: ["https://broski-social-chat.onrender.com"],
    credentials: true,
  })
);

// Load environment variables
require("dotenv").config();
const { Server } = require("socket.io");

// Create http server using the Express app
const server = http.createServer(app); // Define the server using the Express app

const onlineUsers = [];
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "https://broski-social-chat.onrender.com",
    ], // Fixed repeated origin keys
    methods: ["GET", "POST"],
    credentials: true,
  },
});
io.on("connection", (socket) => {
  console.log("new connection:", socket.id);
  socket.on("addNewUser", (userID) => {
    const userExists = onlineUsers.some((user) => user.userID === userID);
    if (!userExists) {
      onlineUsers.push({ userID, socketID: socket.id });
    } else {
      const userIndex = onlineUsers.findIndex((user) => user.userID === userID);
      onlineUsers[userIndex].socketID = socket.id;
    }
    console.log(onlineUsers);
    io.emit("getOnlineUsers", onlineUsers);
  });
  socket.on("sendMessage", ({ chatId, senderId, text, receiverId }) => {
    const receiver = onlineUsers.find((user) => user.userID === receiverId);
    if (receiver) {
      const message = {
        chatId,
        senderId,
        text,
        unread: true,
      };
      io.to(receiver.socketID).emit("receiveMessage", message);
      io.to(receiver.socketID).emit("unreadMessage", { chatId, unread: true });
    }
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
    const userIndex = onlineUsers.findIndex(
      (user) => user.socketID === socket.id
    );
    onlineUsers.splice(userIndex, 1);
    io.emit("getOnlineUsers", onlineUsers);
  });
});
// MongoDB connection
const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri)
  .then(() =>
    console.log("MongoDB database connection established successfully")
  )
  .catch((error) => console.log("MongoDb connection error: ", error.message));
// Start the server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
