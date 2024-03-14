import ChatBox from "./ChatBox";
import ChatLists from "./ChatsList";
import OnlineUser from "./OnlineUser";

const Chat = () => {
  const isLoggedIn = !!localStorage.getItem("userInfo");

  return (
    <div className="container mx-auto flex flex-col justify-between items-center py-10 space-y-4">
      {isLoggedIn && (
        <div className="w-full">
          <OnlineUser />
        </div>
      )}
      <div className="flex w-full">
        <div className="w-1/4 bg-gray-100">
          <ChatLists />
        </div>
        <div className="w-3/4 bg-white">
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default Chat;
