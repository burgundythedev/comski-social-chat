import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatType, ChatState, Chat } from "../models"; 

const initialState: ChatState = {
  chats: [],
  loading: false,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<ChatType>) => {
      const newChat: Chat = {
        chatId: action.payload._id,
        members: action.payload.members,
      };
      state.chats.push(newChat);
    },
    getUserChats: (state, action: PayloadAction<ChatType[]>) => {
      state.chats = action.payload.map(chatType => ({
        chatId: chatType._id,
        members: chatType.members,
      }));
    },
    isChatsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    removeChat: (state, action: PayloadAction<string>) => {
      state.chats = state.chats.filter(chat => chat.chatId !== action.payload);
    },
    updateChat: (state, action: PayloadAction<ChatType & { chatId: string }>) => {
      const index = state.chats.findIndex(chat => chat.chatId === action.payload._id);
      if (index !== -1) {
        state.chats[index] = action.payload;
      }
    },
  },
});

export const { addChat, isChatsLoading, removeChat, updateChat, getUserChats } = chatSlice.actions;
export default chatSlice.reducer;
