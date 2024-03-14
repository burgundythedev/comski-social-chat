import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentChat } from "../../store/chatSlice";
import {
  useFetchChatsByUserIdQuery,
  useFetchUsersByIdsQuery,
} from "../../services/apiSlice";
import { User, formatDate } from "../../models/index";
import avatar from "../../assets/avatar.webp";
import useLastMessages from "../../hooks/useFetchLastMessages"; // Adjust the import path

type UsersById = { [key: string]: User };

const ChatList = () => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const [users, setUsers] = useState<UsersById>({});

  const {
    data: chatData,
    isLoading: isLoadingChats,
    error: errorChats,
  } = useFetchChatsByUserIdQuery(userInfo._id);

  useEffect(() => {
    if (chatData?.chats && chatData.chats.length > 0) {
      const sortedChats = [...chatData.chats].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      dispatch(setCurrentChat(sortedChats[0]));
    }
  }, [chatData?.chats, dispatch]);

  useEffect(() => {
    const savedChatId = localStorage.getItem("currentChatId");
    const chatToSelect = savedChatId
      ? chatData?.chats.find((chat) => chat._id === savedChatId)
      : chatData?.chats[0];

    if (chatToSelect) {
      dispatch(setCurrentChat(chatToSelect));
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

  const chatIds = chatData?.chats.map((chat) => chat._id) || [];
  const lastMessages = useLastMessages(chatIds);

  if (isLoadingChats) return <div>Loading chats...</div>;
  if (errorChats) return <div>Error fetching chats</div>;

  return (
    <div >
      <h2 className="text-2xl font-semibold my-">Chats</h2>
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
                  .map((id) => users[id]?.name || "Unknown User")
                  .join(", ")}
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
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
