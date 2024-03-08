import { useFetchChatsByUserIdQuery } from "../services/apiSlice";

const ChatsList = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const {
    data = { chats: [] },
    isLoading,
    error,
  } = useFetchChatsByUserIdQuery(userInfo._id);

  if (isLoading) return <div>Loading chats...</div>;
  if (error) return <div>Error fetching chats</div>;

  return (
    <div className="overflow-auto h-full p-4">
      <h2 className="font-bold text-xl mb-4">Your Chats</h2>
      <ul>
        {data.chats.map((chat) => (
          <li key={chat._id} className="mb-2">
            Chat between: {chat.members.join(", ")} - ID: {chat._id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatsList;
