const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const userRoute = require("./routes/userRoute");
const chatRoute = require("./routes/chatRoute");
const userMessages = require("./routes/messageRoute");

// Set up Express
const app = express();

// Security enhancements
app.use(helmet());
const corsOptions = {
  origin: ["http://127.0.0.1:5173", "https://broski-social-chat.onrender.com"],
  credentials: true, // because you're sending requests with credentials like cookies/tokens
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Middleware for parsing JSON
app.use(express.json());

// Serve static files - only if you're serving your front-end from the same server

app.use(express.static("/home/olivierb/comski-social-chat/client/dist"));

// API routes
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", userMessages);

// Make sure all non-API requests return the index.html file, enabling SPA routing
app.use(express.static("/home/olivierb/comski-social-chat/client/dist"));
app.get("*", (req, res) => {
  res.sendFile(
    path.join("/home/olivierb/comski-social-chat/client/dist", "index.html")
  );
});

// Set up HTTP server and Socket.IO
const onlineUsers = [];
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["https://broski-social-chat.onrender.com"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("New connection:", socket.id);

  socket.on("addNewUser", (userID) => {
    const userExists = onlineUsers.some((user) => user.userID === userID);
    if (!userExists) {
      onlineUsers.push({ userID, socketID: socket.id });
    } else {
      const userIndex = onlineUsers.findIndex((user) => user.userID === userID);
      onlineUsers[userIndex].socketID = socket.id;
    }
    io.emit("getOnlineUsers", onlineUsers);
  });

  socket.on("sendMessage", ({ chatId, senderId, text, receiverId }) => {
    const receiver = onlineUsers.find((user) => user.userID === receiverId);
    if (receiver) {
      io.to(receiver.socketID).emit("receiveMessage", {
        chatId,
        senderId,
        text,
        unread: true,
      });
      io.to(receiver.socketID).emit("unreadMessage", { chatId, unread: true });
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
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
  .catch((error) => console.error("MongoDB connection error:", error));

// Error handling for unmatched routes or methods
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
