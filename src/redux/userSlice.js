import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user", // default value
  initialState: {
    user: null,
    isLoading: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const selectIsLoading = (state) => state.user.isLoading;

export const { login, logout, showLoading, hideLoading } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
