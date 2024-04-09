import ChatBox from "./ChatBox";
import ChatLists from "./ChatsList";
import OnlineUser from "./OnlineUser";


const Chat = () => {
  const isLoggedIn = !!localStorage.getItem("userInfo");

  return (
    <div className="flex flex-grow h-full py-20">
      <div className="flex flex-grow">
        <div className="w-1/4 bg-rgbYellow rounded-lg overflow-hidden">
          <ChatLists />
        </div>
        <div className="flex-grow bg-white overflow-hidden">
          <ChatBox />
        </div>
        {isLoggedIn && (
          <div className="w-1/4">
            <OnlineUser />
          </div>
        )}
      </div>
    </div>
  );
};


export default Chat;
