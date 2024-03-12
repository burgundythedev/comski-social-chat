import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useFetchMessagesByChatIdQuery } from "../../services/apiSlice";
import { formatDate } from "../../models";

const ChatBox = () => {
  const currentChat = useSelector((state: RootState) => state.chat.currentChat);
  const chatId = currentChat?._id;

  const { data: messages, isLoading, error } = useFetchMessagesByChatIdQuery(chatId ?? "", { skip: !chatId });


  if (isLoading) return <div>Loading messages...</div>;
  if (error) return <div>Error loading messages</div>;

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {messages && messages.length > 0 ? (
          messages.map((message) => (
            <div key={message._id}>
              <div>{message.text}</div>
              <div className="text-sm text-gray-500">
                {formatDate(message.createdAt)}
              </div>
            </div>
          ))
        ) : (
          <div>No messages found</div>
        )}
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
