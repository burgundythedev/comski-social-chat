import ChatLists from "./ChatsList";
import OnlineUser from "./OnlineUser";
import ChatBox from "./ChatBox";
import useResponsive from "../../hooks/useResponsive";

const Chat = () => {
  const isLoggedIn = !!localStorage.getItem("userInfo");
  const isWide = useResponsive(728);

  return (
    <div className="p-5 mt-10 flex flex-col justify-center">
      {isLoggedIn && (
        <div className="">
          <OnlineUser />
        </div>
      )}
      <div className="mt-10 min-h-screen">
        <ChatLists />
        <div className="">{isWide && <ChatBox />}</div>
      </div>
    </div>
  );
};

export default Chat;
