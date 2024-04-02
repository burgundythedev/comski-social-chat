import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentChat } from "../../store/chatSlice";
import {
  useDeleteChatMutation,
  useFetchChatsByUserIdQuery,
  useFetchUsersByIdsQuery,
} from "../../services/apiSlice";
import { User, formatDate } from "../../models/index";
import avatar from "../../assets/avatar.webp";
import useLastMessages from "../../hooks/useFetchLastMessages";
import socket from "../../services/socket";

type UsersById = { [key: string]: User };

const ChatList = () => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const [users, setUsers] = useState<{ [key: string]: User }>({});
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [deleteChat] = useDeleteChatMutation();

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

  if (isLoadingChats) return <div>Loading chats...</div>;
  if (errorChats) return <div>Error fetching chats</div>;

  return (
    <div className="font-kode">
      <h2 className="text-2xl font-semibold my-4 ">Chats</h2>
      <ul>
        {chatData?.chats.map((chat) => (
          <div
            key={chat._id}
            className="flex items-center space-x-4 p-4 border border-black rounded"
            onClick={() => dispatch(setCurrentChat(chat))}
          >
            <div className="flex-1">
              <p>
                {chat.members
                  .filter((id) => id !== userInfo._id)
                  .map((id) => {
                    const displayName = users[id]?.name || "Unknown User";
                    const isOnline = onlineUsers.includes(id);
                    return (
                      <span key={id} className="flex items-center space-x-2">
                        {isOnline && (
                          <span className="block h-2 w-2 bg-green-500 rounded-full"></span>
                        )}{" "}
                        <img
                          className="w-5 h-5 rounded-full"
                          src={avatar}
                          alt="Avatar"
                        />
                        <span className="text-2xl ml-20 py-2">
                          {displayName}
                        </span>
                      </span>
                    );
                  })}
              </p>
              <p className="text-gray-600 text-2xl py-2 font-concert">
                {lastMessages[chat._id]?.text || "Start a chat"}
              </p>
              <p className="w-full text-xs text-gray-500">
                {formatDate(
                  lastMessages[chat._id]?.createdAt ?? chat.createdAt
                )}
              </p>
            </div>
            <div className="">
              <button
                onClick={(e) => {
                  e.stopPropagation(); 
                  handleDeleteChat(chat._id);
                }}
                className="text-red-500 text-5xl font-bold font-concert"
              >
                X
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
