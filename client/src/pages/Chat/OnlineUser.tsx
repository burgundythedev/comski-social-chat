import { useEffect, useState } from "react";
import {
  useFetchRegisteredUsersQuery,
  useCreateChatMutation,
  useFetchChatsByUserIdQuery,
} from "../../services/apiSlice";
import socket from "../../services/socket";
import { User } from "../../models";

const OnlineUser = () => {
  const { data: users, isLoading: loadingUsers } =
    useFetchRegisteredUsersQuery();
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const loggedInUserId = userInfo._id;
  const { data: chatData, isLoading: loadingChats } =
    useFetchChatsByUserIdQuery(loggedInUserId);
  const [createChat] = useCreateChatMutation();
  const [displayUsers, setDisplayUsers] = useState<User[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [newMessageNotification, setNewMessageNotification] = useState("");

  useEffect(() => {
    socket.on("getOnlineUsers", (onlineUsersList) => {
      const userIds = onlineUsersList.map(
        (user: { userID: string }) => user.userID
      );
      setOnlineUsers(userIds);
    });

    socket.on("receiveMessageNotification", ({ chatId }) => {
      setNewMessageNotification(`New message in chat: ${chatId}`);
      console.log("New message in chat:", chatId);
    });

    return () => {
      socket.off("getOnlineUsers");
      socket.off("receiveMessageNotification");
    };
  }, []);

  useEffect(() => {
    if (users && chatData?.chats) {
      const filteredUsers = users.filter(
        (user) =>
          !chatData.chats.some((chat) => chat.members.includes(user._id)) &&
          user._id !== loggedInUserId
      );
      setDisplayUsers(filteredUsers);
    }
  }, [users, chatData, loggedInUserId]);

  const handleCreateChat = async (secondUserId: string) => {
    try {
      await createChat({
        firstId: loggedInUserId,
        secondId: secondUserId,
      }).unwrap();
      console.log("Chat created successfully");
    } catch (err) {
      console.error("Failed to create chat:", err);
    }
  };

  if (loadingUsers || loadingChats) return <div>Loading...</div>;

  return (
    <div className="font-kode">
      {displayUsers.length > 0 ? (
        <ul className="flex flex-row flex-wrap">
          {displayUsers.map((user) => (
            <li
              key={user._id}
              className="relative mr-4 mb-2 bg-customYellow p-2 rounded-lg cursor-pointer hover:bg-blue-300 flex items-center"
              onClick={() => handleCreateChat(user._id)}
            >
              {user.name}
              {onlineUsers.includes(user._id) && (
                <span className="absolute right-0 bottom-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
              )}
              {newMessageNotification && (
                <p className="ml-2 text-xs">(New Message)</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div>Ask your friends and family to join to have more fun Chat!</div>
      )}
    </div>
  );
};

export default OnlineUser;
