const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const chatRoute = require("./routes/chatRoute");
const userMessages = require("./routes/messageRoute");

// Set up Express
const app = express();
app.use(express.json());
app.use(cors());

// Load environment variables
require("dotenv").config();

// Define routes
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", userMessages);

app.get("/", (req, res) => {
  res.send("Hello World! Welcome to Social Media App");
});

// Set up HTTP server and Socket.IO
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const onlineUsers = [];
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
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
      io.to(receiver.socketID).emit("receiveMessage", {
        chatId,
        senderId,
        text,
      });

      io.to(receiver.socketID).emit("receiveNotification", {
        senderId,
        message: "new message!",
      });
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
