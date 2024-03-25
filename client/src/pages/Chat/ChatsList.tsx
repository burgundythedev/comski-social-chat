import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentChat } from "../../store/chatSlice";
import {
  useFetchChatsByUserIdQuery,
  useFetchUsersByIdsQuery,
  useDeleteChatMutation,
} from "../../services/apiSlice";
import { User, formatDate } from "../../models/index";
import avatar from "../../assets/avatar.webp";
import useLastMessages from "../../hooks/useFetchLastMessages";
import socket from "../../services/socket";

type UsersById = { [key: string]: User };

const ChatList = () => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const [users, setUsers] = useState<UsersById>({});
  const [onlineUsers, setOnlineUsers] = useState<Array<{ userID: string; socketID: string }>>([]);
  const [deleteChat] = useDeleteChatMutation();
  const { data: chatData, isLoading: isLoadingChats, error: errorChats, refetch } = useFetchChatsByUserIdQuery(userInfo._id);

  useEffect(() => {
    socket.on("getOnlineUsers", (onlineUsersList: Array<{ userID: string; socketID: string }>) => {
      setOnlineUsers(onlineUsersList);
    });

    return () => {
      socket.off("getOnlineUsers");
    };
  }, []);

 

  useEffect(() => {
    if (chatData?.chats && chatData.chats.length > 0) {
      dispatch(setCurrentChat(chatData.chats[0]));
    }
  }, [chatData?.chats, dispatch]);

  const memberIds = chatData?.chats.flatMap((chat) => chat.members).filter((id) => id !== userInfo._id).join(",") || "";
  const { data: usersData } = useFetchUsersByIdsQuery(memberIds, {
    skip: memberIds.length === 0,
  });

  useEffect(() => {
    if (usersData) {
      const usersById = usersData.reduce((acc: UsersById, user) => ({ ...acc, [user._id]: user }), {});
      setUsers(usersById);
    }
  }, [usersData]);

  const lastMessages = useLastMessages(chatData?.chats.map((chat) => chat._id) || []);

  const handleDeleteChat = async (chatId: string) => {
    try {
      await deleteChat(chatId).unwrap();
      refetch(); // This will refetch the list of chats to update the UI
      // Optionally, dispatch an action to update Redux state, if not relying solely on RTK Query cache
    } catch (error) {
      console.error("Failed to delete chat:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };
  

  if (isLoadingChats) return <div>Loading chats...</div>;
  if (errorChats) return <div>Error fetching chats</div>;

  return (
    <div>
      <h2 className="text-2xl font-semibold my-4">Chats</h2>
      <ul>
        {chatData?.chats.map((chat) => (
          <div key={chat._id} className="flex items-center space-x-4 p-4 border border-black rounded" onClick={() => dispatch(setCurrentChat(chat))}>
            <img className="w-10 h-10 rounded-full" src={avatar} alt="Avatar" />
            <div className="flex-1">
              <p>
                {chat.members.filter((id) => id !== userInfo._id).map((id) => {
                  const onlineUser = onlineUsers.find((user) => user.userID === id);
                  const displayName = users[id]?.name || "Unknown User";
                  return (
                    <span key={id}>
                      {displayName}
                      {onlineUser && <span className="ml-1 text-green-600 animate-pulse">🟢</span>}
                    </span>
                  );
                })}
              </p>
              <p className="text-gray-600">{lastMessages[chat._id]?.text || "Start a chat"}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">{formatDate(lastMessages[chat._id]?.createdAt ?? chat.createdAt)}</p>
            </div>
            <button onClick={(e) => { e.stopPropagation(); handleDeleteChat(chat._id); }}>Delete Chat</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
