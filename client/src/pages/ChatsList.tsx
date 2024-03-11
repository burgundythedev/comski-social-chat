import { useEffect, useState } from "react";
import { useFetchChatsByUserIdQuery, useFetchUsersByIdsQuery } from "../services/apiSlice";
import { User, ChatType } from "../models/index";
import avatar from "../assets/avatar.webp";

type UsersById = { [key: string]: User };

const Chat = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const [users, setUsers] = useState<UsersById>({});

  // Call each hook once and use destructuring to get both the data and refetch function.
  const {
    data: chatData,
    isLoading: isLoadingChats,
    error: errorChats,
    refetch: refetchChats,
  } = useFetchChatsByUserIdQuery(userInfo._id);

  const chats = chatData?.chats || [];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memberIds = [...new Set(chats.flatMap((chat) => chat.members))];

  const {
    data: usersData,
    isLoading: isLoadingUsers,
    error: errorUsers,
    refetch: refetchUsers,
  } = useFetchUsersByIdsQuery(memberIds.length > 0 ? memberIds.join(",") : "dummy");

  useEffect(() => {
    if (usersData) {
      const usersById = usersData.reduce((acc: UsersById, user: User) => {
        acc[user._id] = user;
        return acc;
      }, {});
      setUsers(usersById);
    }
  }, [usersData]);

  useEffect(() => {
    // This is an example of how you might trigger a refetch, for example, after a chat is created.
    // You would need to determine the appropriate time to call these based on your application's logic.
    refetchChats();
    if (memberIds.length > 0) {
      refetchUsers();
    }
  }, [refetchChats, refetchUsers, memberIds]);

  if (isLoadingChats || isLoadingUsers) return <div>Loading chats...</div>;
  if (errorChats || errorUsers) return <div>Error fetching chats</div>;

  return (
    <div>
      <ul>
        {chats.map((chat: ChatType) => (
          <div
            key={chat._id}
            className="flex items-center space-x-4 p-4 border border-black rounded"
          >
            <img className="w-10 h-10 rounded-full" src={avatar} alt="avatar" />
            <div>
              <p>
                {chat.members
                  .filter((id) => id !== userInfo._id)
                  .map((id) => users[id]?.name || "Unknown user")
                  .join(", ")}
              </p>
              <p>Text Message</p>
            </div>
            <div className="flex flex-col items-end space-x-2">
              <p>22/09/1956</p>
              <p>2</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Chat;
