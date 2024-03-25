import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  useFetchMessagesByChatIdQuery,
  useSendChatMessageMutation,
} from "../../services/apiSlice";
import InputEmoji from "react-input-emoji";
import { formatDate } from "../../models";
import socket from "../../services/socket";

const ChatBox = () => {
  const currentChat = useSelector((state: RootState) => state.chat.currentChat);
  const chatId = currentChat?._id;
  const [messageText, setMessageText] = useState("");

  const [sendChatMessage] = useSendChatMessageMutation();
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const senderId = userInfo._id;

  const {
    data: messages,
    isLoading,
    error,
    refetch,
  } = useFetchMessagesByChatIdQuery(chatId ?? "", { skip: !chatId });

  useEffect(() => {
    socket.on("getMessage", (newMessage) => {
      if (newMessage.chatId === chatId) {
        refetch();
      }
    });

    return () => {
      socket.off("getMessage");
    };
  }, [chatId, refetch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim() || !chatId) return;

    const messageData = {
      chatId,
      senderId,
      text: messageText,
      receiverId: currentChat?.members.find((id) => id !== senderId),
    }; // Adjust receiverId as needed
    await sendChatMessage(messageData).unwrap();
    socket.emit("sendMessage", messageData);
    setMessageText("");
  };

  if (isLoading) return <div>Loading messages...</div>;
  if (error) return <div>Error loading messages</div>;

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {messages && messages.length > 0 ? (
          messages.map((message) => (
            <div key={message._id}>
              <div>{message.text}</div>
              <div className="text-sm text-gray-500">
                {formatDate(message.createdAt)}
              </div>
            </div>
          ))
        ) : (
          <div>Start a chat!</div>
        )}
      </div>
      <div className="p-4 border-t border-gray-200">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-2">
            <div className="flex-1">
              <InputEmoji
                value={messageText}
                onChange={setMessageText}
                placeholder="Type a message..."
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
