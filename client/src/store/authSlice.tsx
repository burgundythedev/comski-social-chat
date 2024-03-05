import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, RegisterInfo } from "../models";

export const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  isLoggedInError: false,

  isRegistered: false,
  isRegisteredError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUserRegister(
      state,
      action: PayloadAction<RegisterInfo & { _id: string; token: string }>
    ) {
      const { _id, name, email, token } = action.payload;

      state.user = { _id, email, name, token };
    },

    loginUser(
      state,
      action: PayloadAction<{
        _id: string;
        name: string;
        email: string;
        token: string;
        password: string;
      }>
    ) {
      const { _id, name, email, token, password } = action.payload;

      localStorage.setItem(
        "userInfo",
        JSON.stringify({ _id, name, email, token, password })
      );

      state.user = { _id, name, email, token, password };
    },

    logoutUser(state) {
      localStorage.removeItem("userInfo");

      state.user = null;
    },
  },
});

export const { addUserRegister, loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
