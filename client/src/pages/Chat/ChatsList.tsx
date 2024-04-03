import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentChat } from "../../store/chatSlice";
import {
  useDeleteChatMutation,
  useFetchChatsByUserIdQuery,
  useFetchUsersByIdsQuery,
} from "../../services/apiSlice";
import { User, formatDate } from "../../models/index";
import avatar from "../../assets/avatar.webp";
import trashIcon from "../../assets/delete.png";
import useLastMessages from "../../hooks/useFetchLastMessages";
import socket from "../../services/socket";
import { RootState } from "../../store/store";

type UsersById = { [key: string]: User };

const ChatList = () => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const [users, setUsers] = useState<{ [key: string]: User }>({});
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [deleteChat] = useDeleteChatMutation();
  const currentChat = useSelector((state: RootState) => state.chat.currentChat);
  const [unreadChats, setUnreadChats] = useState<string[]>([]);

  const {
    data: chatData,
    isLoading: isLoadingChats,
    error: errorChats,
    refetch,
  } = useFetchChatsByUserIdQuery(userInfo._id);
  useEffect(() => {
    socket.on("getOnlineUsers", (onlineUsersList) => {
      setOnlineUsers(
        onlineUsersList.map((user: { userID: string }) => user.userID)
      );
    });

    socket.emit("addNewUser", userInfo._id);

    return () => {
      socket.off("getOnlineUsers");
    };
  }, [userInfo._id]);
  useEffect(() => {
    socket.on("unreadMessage", ({ chatId, unread }) => {
      if (unread) {
        setUnreadChats((prevUnreadChats) => [...prevUnreadChats, chatId]);
      } else {
        setUnreadChats((prevUnreadChats) =>
          prevUnreadChats.filter((id) => id !== chatId)
        );
      }
    });

    return () => {
      socket.off("unreadMessage");
    };
  }, []);

  useEffect(() => {
    if (chatData?.chats && chatData.chats.length > 0) {
      dispatch(setCurrentChat(chatData.chats[0]));
    }
  }, [chatData?.chats, dispatch]);

  const memberIds =
    chatData?.chats
      .flatMap((chat) => chat.members)
      .filter((id) => id !== userInfo._id)
      .join(",") || "";
  const { data: usersData } = useFetchUsersByIdsQuery(memberIds, {
    skip: memberIds.length === 0,
  });

  useEffect(() => {
    if (usersData) {
      const usersById = usersData.reduce(
        (acc: UsersById, user) => ({ ...acc, [user._id]: user }),
        {}
      );
      setUsers(usersById);
    }
  }, [usersData]);

  const lastMessages = useLastMessages(
    chatData?.chats.map((chat) => chat._id) || []
  );
  const handleDeleteChat = async (chatId: string) => {
    try {
      await deleteChat(chatId).unwrap();

      refetch();
    } catch (err) {
      console.error("Error deleting chat", err);
    }
  };
  const truncateMessage = (message: string, maxLength = 10) => {
    if (message.length > maxLength) {
      return `${message.substring(0, maxLength)}...`;
    } else {
      return message;
    }
  };

  if (isLoadingChats) return <div>Loading chats...</div>;
  if (errorChats) return <div>Error fetching chats</div>;

  return (
    <div className="font-kode">
      <h2 className="text-2xl font-semibold p-5">Chats</h2>
      <ul className="p-5">
        {chatData?.chats.map((chat) => (
          <div
            key={chat._id}
            className={`flex flex-col p-4 border border-black rounded mb-5 cursor-pointer ${
              unreadChats.includes(chat._id)
                ? "bg-blue-100 animate-pulse"
                : currentChat && chat._id === currentChat._id
                ? "bg-blue-100"
                : "bg-white"
            }`}
            onClick={() => {
              dispatch(setCurrentChat(chat));
              // When a chat is clicked, consider all messages in it as read
              setUnreadChats((prevUnreadChats) =>
                prevUnreadChats.filter((id) => id !== chat._id)
              );
            }}
          >
            <div className="flex-1">
              <div className="flex flex-row justify-between">
                {chat.members
                  .filter((id) => id !== userInfo._id)
                  .map((id) => {
                    const displayName = users[id]?.name || "Unknown User";
                    const isOnline = onlineUsers.includes(id);
                    return (
                      <span key={id} className="flex items-center space-x-2">
                        <img
                          className="w-5 h-5 rounded-full"
                          src={avatar}
                          alt="Avatar"
                        />
                        <span className="text-2xl ml-20 py-2">
                          {displayName}
                        </span>
                        {isOnline && (
                          <span className="block h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
                        )}
                      </span>
                    );
                  })}
                <p className="text-gray-600 text-xl py-2 font-concert">
                  <p className="text-gray-600 text-xl py-2 font-concert">
                    {lastMessages[chat._id]
                      ? truncateMessage(lastMessages[chat._id]?.text || "")
                      : "Start a chat"}
                  </p>
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-end">
              <p className="w-full text-xs text-black">
                {formatDate(
                  lastMessages[chat._id]?.createdAt ?? chat.createdAt
                )}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteChat(chat._id);
                }}
                className="text-red-500 text-4xl font-bold font-concert hover:animate-pulse"
              >
                <img
                  className="w-10 hover:scale-125 transition-transform duration-1000"
                  src={trashIcon}
                  alt="trash-icon"
                />
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
