//Auth related

export interface User {
  _id: string;
  token: string;
  typeToken: string;
  email: string;
  name: string;
  password?: string;
}

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  isLoggedInError: boolean;
  isRegistered: boolean;
  isRegisteredError: boolean;
}

export interface RegisterInfo {
  name: string;
  email: string;
  password: string;
  typeToken: string;
}

export interface RegisterResponse {
  _id: string;
  name?: string;
  email: string;
  token: string;
}
export interface BackendError {
  status?: number;
  data?: string;
}

//Chat related

export interface ChatState {
  chats: ChatType[];
  loading: boolean;
  currentChat: ChatType | null;
}

export interface ChatResponse {
  chats: ChatType[];
}

export interface ChatType {
  _id: string;
  members: string[];
  createdAt: string;
  lastMessage?: {
    _id: string;
    text: string;
    createdAt: string;
  };
}

export interface ChatWithMetadata extends ChatType {
  unreadMessageCount: number;
}

//Message related

export interface Message {
  senderName: string;
  _id: string;
  chatId: string;
  senderId: string;
  text: string;
  createdAt: string;
}

//Socket related
export interface UserOnlineInfo {
  userID: string;
  userSocketID: string;
}

//Date Format

export const formatDate = (dateString: string | number | Date) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
//others
// Assuming you have a limited set of tags
export type TagType = "Chats" | "Messages" | "Users";
