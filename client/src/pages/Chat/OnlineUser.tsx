import  { useEffect, useState } from 'react';
import {
  useFetchRegisteredUsersQuery,
  useCreateChatMutation,
} from "../../services/apiSlice";

const OnlineUser = () => {
  const { data: users, isLoading } = useFetchRegisteredUsersQuery();
  const [createChat, { isSuccess, isError, isLoading: isCreating }] =
    useCreateChatMutation();
  const [chattedUsers, setChattedUsers] = useState(() => {
    // Load chatted users from localStorage
    const saved = localStorage.getItem('chattedUsers');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const loggedInUserId = userInfo._id;

  useEffect(() => {
    // Update localStorage whenever chattedUsers changes
    localStorage.setItem('chattedUsers', JSON.stringify([...chattedUsers]));
  }, [chattedUsers]);

  if (isLoading) return <div>Loading...</div>;

  const handleCreateChat = async (secondUserId: string) => {
    try {
      const result = await createChat({
        firstId: loggedInUserId,
        secondId: secondUserId,
      }).unwrap();
      console.log("Chat created successfully", result);
      setChattedUsers(prev => {
        const updated = new Set(prev.add(secondUserId));
        localStorage.setItem('chattedUsers', JSON.stringify([...updated])); // Update localStorage immediately as well
        return updated;
      });
    } catch (err) {
      console.error("Failed to create chat:", err);
    }
  };

  const filteredUsers =
    users?.filter(user => user._id !== loggedInUserId && !chattedUsers.has(user._id)) || [];

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
