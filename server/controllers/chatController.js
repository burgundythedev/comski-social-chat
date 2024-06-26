const chatModel = require("../models/chatModel");
const messageModel = require("../models/messageModel");

const createChat = async (req, res) => {
  const { firstId, secondId } = req.body;

  try {
    const chat = await chatModel.findOne({
      members: { $all: [firstId, secondId] },
    });

    if (chat) {
      return res.status(200).json({ chat });
    }
    const newChat = new chatModel({ members: [firstId, secondId] });
    const response = await newChat.save();
    res.status(200).json({ chat: response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findUserChats = async (req, res) => {
  const { userId } = req.params;

  try {
    const chats = await chatModel.find({ members: { $in: [userId] } });
    res.status(200).json({ chats });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findChat = async (req, res) => {
  const { firstId, secondId } = req.params;

  try {
    const chat = await chatModel.findOne({
      members: { $all: [firstId, secondId] },
    });
    res.status(200).json({ chat });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteChat = async (req, res) => {
  const { chatId } = req.params;
  try {
    await chatModel.findByIdAndDelete(chatId);

    await messageModel.deleteMany({ chatId });

    res
      .status(200)
      .json({ message: "Chat and associated messages deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};
module.exports = { createChat, findUserChats, findChat, deleteChat };
