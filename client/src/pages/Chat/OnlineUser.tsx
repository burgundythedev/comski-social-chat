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
      <div>
        <h2 className="text-xl font-semibold">Online Users</h2>
      </div>
      <div>
        {displayUsers.length > 0 ? (
          <ul className="flex flex-wrap flex-row mt-5">
            {displayUsers.map((user) => (
              <li
                key={user._id}
                className="bg-customYellow p-2 rounded-lg mr-2 my-2 cursor-pointer"
                onClick={() => handleCreateChat(user._id)}
              >
                {user.name}
                {onlineUsers.includes(user._id) && (
                  <span className="inline-block bg-green-500 rounded-full w-3 h-3 animate-fade"></span>
                )}

                {newMessageNotification.includes(user._id) && (
                  <p className="text-xs text-red-500">(New Message)</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="py-5 lg:text-xs">
            Invite your friends and family to Broski for even more fun chats!
          </div>
        )}
      </div>
    </div>
  );
};

export default OnlineUser;
