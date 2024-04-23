import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentChat } from "../../store/chatSlice";
import {
  useDeleteChatMutation,
  useFetchChatsByUserIdQuery,
  useFetchUsersByIdsQuery,
} from "../../services/apiSlice";
import { ChatType, User, formatDate } from "../../models/index";
import avatar from "../../assets/avatar.webp";
import trashIcon from "../../assets/delete.png";
import useLastMessages from "../../hooks/useFetchLastMessages";
import socket from "../../services/socket";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

type UsersById = { [key: string]: User };

const ChatList = () => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const [users, setUsers] = useState<{ [key: string]: User }>({});
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [deleteChat] = useDeleteChatMutation();
  const currentChat = useSelector((state: RootState) => state.chat.currentChat);
  const [unreadChats, setUnreadChats] = useState<string[]>([]);
  const navigate = useNavigate();
  const [isSmartphone, setIsSmartphone] = useState(false);

  const {
    data: chatData,
    isLoading: isLoadingChats,
    error: errorChats,
    refetch,
  } = useFetchChatsByUserIdQuery(userInfo._id);
  useEffect(() => {
    socket.on("getOnlineUsers", (onlineUsersList: { userID: string }[]) => {
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
    socket.on(
      "unreadMessage",
      ({ chatId, unread }: { chatId: string; unread: boolean }) => {
        if (unread) {
          setUnreadChats((prevUnreadChats) => [...prevUnreadChats, chatId]);
        } else {
          setUnreadChats((prevUnreadChats) =>
            prevUnreadChats.filter((id) => id !== chatId)
          );
        }
      }
    );

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
  useEffect(() => {
    const handleResize = () => {
      setIsSmartphone(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
  const handleChatClick = (chat: ChatType | null) => {
    if (chat) {
      dispatch(setCurrentChat(chat));
      setUnreadChats((prevUnreadChats) =>
        prevUnreadChats.filter((id) => id !== chat._id)
      );
      if (isSmartphone) {
        navigate(`/chat/${chat._id}`);
      }
    }
  };
  if (isLoadingChats)
    return <div className="font-kode p-2">Loading chats...</div>;
  if (errorChats)
    return <div className="font-kode p-2">Error fetching chats</div>;

  return (
    <div className="font-kode flex flex-col grow mt-10">
      <h2 className="text-xl font-semibold mb-5">Chats</h2>
      <ul className="border-t border-customYellow md:p-5 md:max-h-maxHeight overflow-y-auto">
        {chatData?.chats.length === 0 ? (
          <p className="text-center text-sm mt-10">Create a chat and enjoy</p>
        ) : (
          chatData?.chats.map((chat) => (
            <div
              key={chat._id}
              className={`flex flex-col p-4 rounded-xl mb-5 cursor-pointer border-t border-black w-full ${
                unreadChats.includes(chat._id)
                  ? "bg-blue-100 animate-pulse"
                  : currentChat && chat._id === currentChat._id
                  ? "bg-rgbYellow"
                  : "bg-white"
              }`}
              onClick={() => handleChatClick(chat)}
            >
              <div>
                <div>
                  {chat.members
                    .filter((id) => id !== userInfo._id)
                    .map((id) => {
                      const displayName = users[id]?.name || "Unknown User";
                      const isOnline = onlineUsers.includes(id);
                      return (
                        <div key={id} className="flex justify-between mb-4">
                          <div className="flex items-center">
                            <img
                              className="w-5 h-5"
                              src={avatar}
                              alt="Avatar"
                            />
                            <span className="ml-5 text-xl">{displayName}</span>
                            {isOnline && (
                              <span className="inline-block ml-2 bg-green-500 rounded-full w-3 h-3"></span>
                            )}
                          </div>
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteChat(chat._id);
                            }}
                          >
                            <button className="text-red-500">
                              <img
                                className="w-7 hover:scale-125 "
                                src={trashIcon}
                                alt="Delete chat"
                              />
                            </button>
                          </div>
                        </div>
                      );
                    })}

                  <div>
                    <p className="mb-2 font-semibold">
                      {lastMessages[chat._id]
                        ? truncateMessage(lastMessages[chat._id]?.text || "")
                        : "Start a chat"}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs mt-2">
                  {formatDate(
                    lastMessages[chat._id]?.createdAt ?? chat.createdAt
                  )}
                </p>
              </div>
            </div>
          ))
        )}
      </ul>
    </div>
  );
};
export default ChatList;
