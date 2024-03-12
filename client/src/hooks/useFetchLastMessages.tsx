import { useState, useEffect } from 'react';
import { Message } from '../models/index'; 

function useLastMessages(chatIds: string[]) { 
  const [lastMessages, setLastMessages] = useState<{[key: string]: Message | undefined}>({});
  
  useEffect(() => {
    const fetchLastMessages = async () => {
      const promises = chatIds.map(async (chatId) => {
        const response = await fetch(`http://localhost:4000/api/messages/${chatId}`);
        const data: Message[] = await response.json(); 
        const lastMessage = data.length > 0 ? data[data.length - 1] : undefined;
        return { chatId, lastMessage };
      });

      const results = await Promise.all(promises);
      const lastMessagesMap = results.reduce<{[key: string]: Message | undefined}>((acc, { chatId, lastMessage }) => {
        acc[chatId] = lastMessage;
        return acc;
      }, {});

      setLastMessages(lastMessagesMap);
    };

    if (chatIds.length > 0) {
      fetchLastMessages();
    }
  }, [chatIds]);

  return lastMessages;
}

export default useLastMessages;
