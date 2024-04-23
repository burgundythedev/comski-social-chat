import ChatLists from "./ChatsList";
import OnlineUser from "./OnlineUser";
import ChatBox from "./ChatBox";
import useResponsive from "../../hooks/useResponsive";

const Chat = () => {
  const isLoggedIn = !!localStorage.getItem("userInfo");
  const isWide = useResponsive(728);

  return (
    <div className="px-5 flex flex-col md:w-full">
      <div className="mt-10 md:mt-5">
        <div className="md:flex md:flex-row">
          <div className="md:w-1/4">
            {isLoggedIn && (
              <div className="md:mr-4">
                <OnlineUser />
              </div>
            )}
            <div>
              <ChatLists />
            </div>
          </div>
          <div className="md:w-3/4 md:flex md:items-start">{isWide && <ChatBox />}</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
