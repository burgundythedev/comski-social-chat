import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ChatResponse, ChatType, Message, RegisterInfo, User } from "../models";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://broski-social-chat-server.onrender.com/api",
  }),

  tagTypes: ["Chat", "Message"],

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
      providesTags: ["Chat"],
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
      invalidatesTags: ["Chat"],
    }),
    fetchMessagesByChatId: builder.query<Message[], string>({
      query: (chatId) => `/messages/${chatId}`,
      providesTags: (_, __, chatId) => [{ type: "Message", id: chatId }],
    }),

    sendChatMessage: builder.mutation<
      Message,
      { chatId: string; senderId: string; text: string }
    >({
      query: ({ chatId, senderId, text }) => ({
        url: `/messages/${chatId}`,
        method: "POST",
        body: { senderId, text },
      }),
      invalidatesTags: (_, __, { chatId }) => [{ type: "Message", id: chatId }],
    }),
    deleteChat: builder.mutation<{ success: boolean; chatId: string }, string>({
      query: (chatId) => ({
        url: `/chats/${chatId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Chat", id: "LIST" }, { type: "Message" }],
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
  useSendChatMessageMutation,
  useDeleteChatMutation,
} = apiSlice;
