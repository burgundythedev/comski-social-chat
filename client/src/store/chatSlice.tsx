import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatType, ChatState } from "../models";

const initialState: ChatState = {
  chats: [],
  loading: false,
  currentChat: null,
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

    setCurrentChat: (state, action: PayloadAction<ChatType | null>) => {
      state.currentChat = action.payload;
    },

    isChatsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { getUserChats, addChat, isChatsLoading, setCurrentChat } =
  chatSlice.actions;

export default chatSlice.reducer;
