import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ChatResponse, ChatType, Message, RegisterInfo, User } from "../models";

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

    fetchChatsByUserId: builder.query<ChatResponse, string>({
      query: (userId) => `/chats/${userId}`,
    }),
    fetchUsersByIds: builder.query<User[], string>({
      query: (ids) => `/users?ids=${ids}`,
    }),
    fetchRegisteredUsers: builder.query<User[], void>({
      query: () => "/users",
    }),
    createChat: builder.mutation<
      ChatType,
      { firstId: string; secondId: string }
    >({
      query: (members) => ({
        url: "/chats",
        method: "POST",
        body: members,
      }),
    }),
    fetchMessagesByChatId: builder.query<Message[], string>({
      query: (chatId) => `/messages/${chatId}`,
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useFetchChatsByUserIdQuery,
  useFetchUsersByIdsQuery,
  useFetchRegisteredUsersQuery,
  useCreateChatMutation,
  useFetchMessagesByChatIdQuery,
} = apiSlice;
