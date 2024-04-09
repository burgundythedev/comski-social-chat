import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  useFetchMessagesByChatIdQuery,
  useSendChatMessageMutation,
  useFetchUsersByIdsQuery,
} from "../../services/apiSlice";
import InputEmoji from "react-input-emoji";
import { formatDate } from "../../models";
import socket from "../../services/socket";

const ChatBox = () => {
  const currentChat = useSelector((state: RootState) => state.chat.currentChat);
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const [messageText, setMessageText] = useState("");
  const [sendChatMessage] = useSendChatMessageMutation();
  const scroll = useRef<HTMLDivElement>(null);
  const {
    data: messages,
    isLoading,
    error,
    refetch,
  } = useFetchMessagesByChatIdQuery(currentChat?._id ?? "", {
    skip: !currentChat,
  });
  const senderIds = useMemo(() => {
    const ids = messages?.map((message) => message.senderId) || [];
    return [...new Set(ids)].join(",");
  }, [messages]);

  const { data: users } = useFetchUsersByIdsQuery(senderIds, {
    skip: !senderIds,
  });

  // Map users by their ID for easy access
  const usersById = useMemo(() => {
    return (
      users?.reduce((acc: { [key: string]: unknown }, user) => {
        acc[user._id] = user;
        return acc;
      }, {}) || {}
    );
  }, [users]);
  useEffect(() => {
    socket.on(
      "receiveMessage",
      (newMessage: { chatId: string | undefined }) => {
        if (newMessage.chatId === currentChat?._id) {
          refetch();
        }
        scroll.current?.scrollIntoView({ behavior: "smooth" });
      }
    );

    return () => {
      socket.off("receiveMessage");
    };
  }, [currentChat, refetch]);
  const handleSubmit = useCallback(
    async (e?: React.FormEvent<HTMLFormElement>) => {
      e?.preventDefault();
      if (!messageText.trim() || !currentChat) return;

      const messageData = {
        chatId: currentChat._id,
        senderId: userInfo._id,
        text: messageText,
        receiverId: currentChat.members.find((id) => id !== userInfo._id),
      };

      socket.emit("sendMessage", messageData);
      await sendChatMessage(messageData).unwrap();
      setMessageText("");
    },
    [messageText, currentChat, sendChatMessage, userInfo._id]
  );

  useEffect(() => {
    const handleEnterPress = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
    };

    document.addEventListener("keydown", handleEnterPress);

    return () => {
      document.removeEventListener("keydown", handleEnterPress);
    };
  }, [handleSubmit]);

  if (isLoading) return <div>Loading messages...</div>;
  if (error) return <div>Error loading messages</div>;

  return (
    <div className="mx-10 flex h-full flex-col font-concert">
      <div className="flex-1 overflow-y-auto">
        {messages && messages.length > 0 ? (
          messages.map((message) => (
            <div
              ref={scroll}
              key={message._id}
              className="mb-4 p-5 rounded-lg bg-white shadow"
            >
              <div className="text-xl font-kode">
                {(usersById[message.senderId] as { name: string })?.name ||
                  "Unknown User"}
              </div>
              <div className="flex flex-row items-center justify-between mt-5">
                <p>{message.text}</p>
                <p className="text-sm text-gray-500">
                  {formatDate(message.createdAt)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div>No messages yet. Start a conversation!</div>
        )}
      </div>

      <div className="p-4 border-t border-gray">
        <form className="flex flex-row" onSubmit={handleSubmit}>
          <InputEmoji
            value={messageText}
            onChange={setMessageText}
            placeholder="Type a message..."
            shouldReturn={false}
            shouldConvertEmojiToImage={false}
          />
          <button
            type="submit"
            disabled={!currentChat?._id}

            className="mt-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;