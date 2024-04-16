import ChatLists from "./ChatsList";
import OnlineUser from "./OnlineUser";
import ChatBox from "./ChatBox";
import useResponsive from "../../hooks/useResponsive";

const Chat = () => {
  const isLoggedIn = !!localStorage.getItem("userInfo");
  const isWide = useResponsive(728);

  return (
    <div className="w-full mt-10 p-5 flex flex-col justify-center md:mt-0">
    {isLoggedIn && (
      <div className="md:mr-4">
        <OnlineUser />
      </div>
    )}
    <div className="mt-10 md:mt-5">
      <div className="md:flex md:flex-row">
        <div className="md:w-1/4">
          <ChatLists />
        </div>
        <div className="md:w-3/4">
          {isWide && <ChatBox />}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Chat;
