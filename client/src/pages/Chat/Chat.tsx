import ChatBox from "./ChatBox";
import ChatLists from "./ChatsList";
import OnlineUser from "./OnlineUser";

const Chat = () => {
  const isLoggedIn = !!localStorage.getItem("userInfo");

  return (
    <div>
      {isLoggedIn && (
        <div className=" py-10">
          <OnlineUser />
        </div>
      )}
      <div className="flex">
        <div className="w-1/4 bg-rgbYellow rounded-lg">
          <ChatLists />
        </div>
        <div className="flex-grow  bg-white overflow-hidden">
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default Chat;
