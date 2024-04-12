import { useEffect, useState } from "react";
import {  ChatType, User } from "../models";

export const useFetchRecipients = (chat: ChatType, user: User) => {
  const [recipients, setRecipients] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  const recipientIds = chat.members
    .filter((memberId: string) => memberId !== user._id)
    .join(",");

  useEffect(() => {
    const fetchUsers = async () => {
      try {

        const response = await fetch(`/api/users?ids=${recipientIds}`);
        if (!response.ok) {
          throw new Error("Failed to fetch recipients");
        }
        const data: User[] = await response.json();
        setRecipients(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
      }
    };

    if (recipientIds) {
      fetchUsers();
    }
  }, [recipientIds]); 

  return { recipients, error };
};
