const messageModel = require("../models/messageModel");

const createMessage = async (req, res) => {
  const { senderId, text } = req.body;
  const { chatId } = req.params;

  const message = new messageModel({
    chatId,
    senderId,
    text,
  });

  try {
    const response = await message.save();
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

const getChatMessages = async (req, res) => {
  const chatId = req.params.chatId;

  try {
    const messages = await messageModel.find({ chatId });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createMessage, getChatMessages };
