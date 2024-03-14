
import {
  useFetchRegisteredUsersQuery,
  useCreateChatMutation,
  useFetchChatsByUserIdQuery,
} from "../../services/apiSlice";

const OnlineUser = () => {
  const { data: users, isLoading: loadingUsers } = useFetchRegisteredUsersQuery();
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const loggedInUserId = userInfo._id;

  // Fetch chats for the logged-in user
  const { data: chats, isLoading: loadingChats } = useFetchChatsByUserIdQuery(loggedInUserId);
  const [createChat, { isSuccess, isError, isLoading: isCreating }] = useCreateChatMutation();

  // Utility to check if a user has been chatted with
  const hasChattedWith = (userId: string) => {
    return Array.isArray(chats) && chats.some(chat => chat.members.includes(userId));
  };

  if (loadingUsers || loadingChats) return <div>Loading...</div>;

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

  // Filter out logged-in user and users with whom a chat already exists
  const filteredUsers = users?.filter(user => user._id !== loggedInUserId && !hasChattedWith(user._id)) || [];

  return (
    <div>
      <ul className="flex flex-row flex-wrap">
        {filteredUsers.map((user) => (
          <li
            key={user._id}
            className={`mr-4 mb-2 bg-customYellow p-2 rounded-lg cursor-pointer hover:bg-blue-300 ${isCreating ? "opacity-50" : ""}`}
            onClick={() => handleCreateChat(user._id)}
            aria-disabled={isCreating}
          >
            {user.name}
          </li>
        ))}
      </ul>
      {isSuccess && <div>Chat created successfully.</div>}
      {isError && <div>Failed to create chat. Please try again.</div>}
    </div>
  );
};

export default OnlineUser;
