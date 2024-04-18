// Import required modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

// Import routes
const userRoute = require("./routes/userRoute");
const chatRoute = require("./routes/chatRoute");
const messageRoute = require("./routes/messageRoute");

// Initialize Express application
const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["https://broski-social-chat.onrender.com"],
    credentials: true,
  })
);
app.use(express.static("/home/olivierb/comski-social-chat/client/dist"));

// Use Routes
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

// Load environment variables
require("dotenv").config();

// MongoDB connection
// MongoDB connection
const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri)
  .then(() =>
    console.log("MongoDB database connection established successfully")
  )
  .catch((error) => console.log("MongoDB connection error:", error.message));

// Create HTTP server from Express app
const server = http.createServer(app);

// Socket.io configuration
const io = new Server(server, {
  cors: {
    origin: ["https://broski-social-chat.onrender.com"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Handle wildcard routes to serve the front-end application
app.get("*", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "/home/olivierb/comski-social-chat/client/dist",
      "index.html"
    )
  );
});

// Online users array
const onlineUsers = [];

// Socket.io connection events
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
      const message = { chatId, senderId, text, unread: true };
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

// Start the server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
