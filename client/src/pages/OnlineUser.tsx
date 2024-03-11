import {
  useFetchRegisteredUsersQuery,
  useCreateChatMutation,
} from "../services/apiSlice";

const OnlineUser = () => {
  const { data: users, isLoading } = useFetchRegisteredUsersQuery();
  const [createChat, { isSuccess, isError, isLoading: isCreating }] =
    useCreateChatMutation();

  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const loggedInUserId = userInfo._id;

  if (isLoading) return <div>Loading...</div>;

  const filteredUsers =
    users?.filter((user) => user._id !== loggedInUserId) || [];

  const handleCreateChat = async (secondUserId: string) => {
    try {
      const result = await createChat({
        firstId: loggedInUserId,
        secondId: secondUserId,
      }).unwrap();
      console.log("Chat created successfully", result);
    } catch (err) {
      console.error("Failed to create chat:", err);
    }
  };

  return (
    <div>
      <ul className="flex flex-row flex-wrap">
        {filteredUsers.map((user) => (
          <li
            key={user._id}
            className={`mr-4 mb-2 bg-customYellow p-2 rounded-lg cursor-pointer hover:bg-blue-300 ${
              isCreating ? "opacity-50" : ""
            }`}
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
