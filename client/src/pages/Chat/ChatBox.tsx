import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
import send from "../../assets/send.png";
import ButtonReturn from "../../Layout/ButtonReturn";
import useResponsive from "../../hooks/useResponsive";

const ChatBox = () => {
  const currentChat = useSelector((state: RootState) => state.chat.currentChat);
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const [messageText, setMessageText] = useState("");
  const [sendChatMessage] = useSendChatMessageMutation();
  const scroll = useRef<HTMLDivElement>(null);
  const isWide = useResponsive(728);

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
    if (messages && messages.length > 0) {
      setTimeout(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [messages]);

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
    <div className="font-concert py-5 px-5">
      <div className="my-5">{!isWide && <ButtonReturn />}</div>
      <div className="h-screen flex flex-col justify-between overflow-y-auto">
        <div>
          {messages && messages.length > 0 ? (
            messages.map((message, index) => (
              <div
                ref={index === messages.length - 1 ? scroll : undefined}
                key={message._id}
                className="py-3"
              >
                <p className="text-sm underline mb-2">
                  {(usersById[message.senderId] as { name: string })?.name ||
                    "Unknown User"}
                </p>
                <div
                  className="bg-gray-100 rounded-xl p-3 "
                  style={{ maxWidth: "30ch" }}
                >
                  <p className="whitespace-normal break-words">
                    {message.text}
                  </p>
                  <p className="text-xs mt-5">
                    {formatDate(message.createdAt)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div>No messages yet. Start a conversation!</div>
          )}
        </div>

        <div className="w-full">
          <form className="flex items-center" onSubmit={handleSubmit}>
            <div
              className="flex-grow"
              style={{ minWidth: "25ch", maxWidth: "200ch" }}
            >
              <InputEmoji
                value={messageText}
                onChange={setMessageText}
                placeholder="Type a message..."
                shouldReturn={false}
                shouldConvertEmojiToImage={false}
              />
            </div>
            <div className="flex-shrink-0 ml-2">
              <button
                type="submit"
                disabled={!currentChat?._id}
                className="bg-customYellow p-1 rounded-lg hover:border flex items-center justify-center"
              >
                <img src={send} className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
