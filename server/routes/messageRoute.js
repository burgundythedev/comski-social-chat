const express = require("express");
const {
  createMessage,
  getChatMessages,
} = require("../controllers/messageController");
const router = express.Router();

router.post("/:chatId", createMessage);
router.get("/:chatId", getChatMessages);
module.exports = router;
