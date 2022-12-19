import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state, { payload }) => {
      state.user = payload.user;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = {};
      state.isAuthenticated = false;
    },
  },
});

export const { getUser, logout } = authSlice.actions;

export default authSlice.reducer;
