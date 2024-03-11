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

export interface Chat {
  _id: string;
  members: string[];
}

export interface ChatState {
  chats: Chat[];
  loading: boolean;

}
export interface ChatType {
  _id: string;
  members: string[];
}
export interface ChatResponse {
  chats: ChatType[];
}

export interface ChatInfo {
  members: string[];
}

//Message related

export interface Message {
  _id: string;
  chatId: string;
  senderId: string;
  text: string;
}
