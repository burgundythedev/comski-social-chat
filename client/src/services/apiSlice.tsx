import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ChatInfo, ChatResponse, ChatType, RegisterInfo, User } from "../models";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<User, RegisterInfo>({
      query: (userInfo) => ({
        url: "/users/register",
        method: "POST",
        body: userInfo,
      }),
    }),

    loginUser: builder.mutation<User, { email: string; password: string }>({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),

    createChat: builder.mutation<ChatType, ChatInfo>({
      query: (chatInfo) => ({
        url: "/chats",
        method: "POST",
        body: chatInfo,
      }),
    }),
    fetchChatsByUserId: builder.query<ChatResponse, string>({
      query: (userId) => `/chats/${userId}`,
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useCreateChatMutation,
  useFetchChatsByUserIdQuery,
} = apiSlice;
