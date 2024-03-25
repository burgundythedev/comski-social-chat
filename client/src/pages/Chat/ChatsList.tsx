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

type UsersById = { [key: string]: User };

const ChatList = () => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const [users, setUsers] = useState<UsersById>({});
  const [deleteChat] = useDeleteChatMutation();

  const {
    data: chatData,
    isLoading: isLoadingChats,
    error: errorChats,
    refetch,
  } = useFetchChatsByUserIdQuery(userInfo._id);

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
      console.log("Chat deleted successfully");
      refetch(); // Manually trigger a refetch here
    } catch (err) {
      console.error("Failed to delete the chat:", err);
    }
  };

  if (isLoadingChats) return <div>Loading chats...</div>;
  if (errorChats) return <div>Error fetching chats</div>;

  return (
    <div>
      <h2 className="text-2xl font-semibold my-4">Chats</h2>
      <ul>
        {chatData?.chats.map((chat) => (
          <div
            key={chat._id}
            className="flex items-center space-x-4 p-4 border border-black rounded"
            onClick={() => dispatch(setCurrentChat(chat))}
          >
            <img className="w-10 h-10 rounded-full" src={avatar} alt="Avatar" />
            <div className="flex-1">
              <p>
                {chat.members
                  .filter((id) => id !== userInfo._id)
                  .map((id) => {
                    const displayName = users[id]?.name || "Unknown User";
                    return <span key={id}>{displayName}</span>;
                  })}
              </p>
              <p className="text-gray-600">
                {lastMessages[chat._id]?.text || "Start a chat"}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">
                {formatDate(
                  lastMessages[chat._id]?.createdAt ?? chat.createdAt
                )}
              </p>
            </div>
            <button onClick={() => handleDeleteChat(chat._id)}>
              Delete Chat
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
