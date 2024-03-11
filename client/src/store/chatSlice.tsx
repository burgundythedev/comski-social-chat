import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatType, ChatState } from "../models";

const initialState: ChatState = {
  chats: [],
  loading: false,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    getUserChats: (state, action: PayloadAction<ChatType[]>) => {
      state.chats = action.payload;
    },
    addChat: (state, action: PayloadAction<ChatType>) => {
      state.chats.push(action.payload);
    },
    removeChat: (state, action: PayloadAction<string>) => {
      state.chats = state.chats.filter((chat) => chat._id !== action.payload);
    },

    isChatsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { getUserChats, addChat, removeChat, isChatsLoading } =
  chatSlice.actions;

export default chatSlice.reducer;
