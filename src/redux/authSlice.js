import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    signin: {
      isFetching: false,
      success: false,
      error: false,
    },
  },
  reducers: {
    // login
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
    },

    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    // sigin
    signinStart: (state) => {
      state.signin.isFetching = true;
    },
    signinSuccess: (state) => {
      state.signin.isFetching = false;
      state.signin.success = true;
      state.signin.error = false;
    },

    signinFailed: (state) => {
      state.signin.isFetching = false;
      state.signin.success = false;
      state.signin.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  signinStart,
  signinSuccess,
  signinFailed,
} = authSlice.actions;

export default authSlice.reducer;
