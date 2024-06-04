import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logout, refreshUser } from "./operations";
import { AuthState } from "../../types/types";

const initialState: AuthState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.error.message || "Error register user";
        state.loading = false;
      })
      .addCase(logIn.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.error.message || "Error Login user";
        state.loading = false;
      })
      .addCase(logout.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.error.message || "Error Logout user";
        state.loading = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.error = null;
        state.loading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.error = action.error.message || "Error refreshUser";
        state.loading = false;
        state.isRefreshing = false;
      }),
});

export default authSlice.reducer;
