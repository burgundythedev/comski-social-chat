import { useEffect, useState } from "react";
import {
  useFetchRegisteredUsersQuery,
  useCreateChatMutation,
  useFetchChatsByUserIdQuery,
} from "../../services/apiSlice";
import { ChatType, User } from "../../models";

const OnlineUser = () => {
  const { data: users, isLoading: loadingUsers } =
    useFetchRegisteredUsersQuery();
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const loggedInUserId = userInfo._id;
  const { data: chatData, isLoading: loadingChats } =
    useFetchChatsByUserIdQuery(loggedInUserId);
  const [createChat] = useCreateChatMutation();

  const [displayUsers, setDisplayUsers] = useState<User[]>([]);

  useEffect(() => {
    if (users && chatData?.chats) {
      const filteredUsers = users.filter(
        (user) =>
          !chatData.chats.some((chat: ChatType) =>
            chat.members.includes(user._id)
          ) && user._id !== loggedInUserId
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
    <div>
      {displayUsers.length > 0 ? (
        <ul className="flex flex-row flex-wrap">
          {displayUsers.map((user) => (
            <li
              key={user._id}
              className="mr-4 mb-2 bg-customYellow p-2 rounded-lg cursor-pointer hover:bg-blue-300"
              onClick={() => handleCreateChat(user._id)}
            >
              {user.name}
            </li>
          ))}
        </ul>
      ) : (
        <div>
          Ask your friends and family to join Broski to have more fun Chat!
        </div>
      )}
    </div>
  );
};

export default OnlineUser;
