import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RegisterInfo, User } from "../models";

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
  }),
});

// Export hooks for both mutations
export const { useRegisterUserMutation, useLoginUserMutation } = apiSlice;
