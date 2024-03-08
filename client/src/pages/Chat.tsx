import ChatBox from './ChatBox'; 
import ChatLists from './ChatsList'; 

const Chat = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-10">
      <div className="w-1/4 bg-gray-100">

        <ChatLists />
      </div>
      <div className="w-3/4 bg-white">
 
        <ChatBox />
      </div>
    </div>
  );
}

export default Chat;
