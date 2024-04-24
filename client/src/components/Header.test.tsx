import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import Header from "./Header";
import authSlice from "../store/authSlice";

// Mock local storage
const localStorageMock = (function () {
  let store: { [key: string]: string } = {};
  return {
    getItem: function (key: string | number) {
      return store[key] || null;
    },
    setItem: function (
      key: string | number,
      value: { toString: () => string }
    ) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key: string | number) {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("Header Component", () => {
  it("displays the username when the user is logged in", () => {
    window.localStorage.setItem(
      "userInfo",
      JSON.stringify({
        token: "fake-token",
        type: "login",
        name: "John Doe",
      })
    );

    const store = configureStore({
      reducer: {
        auth: authSlice,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    const usernameDisplay = screen.getByText(/John Doe/);
    expect(usernameDisplay).toBeInTheDocument();
  });
});
