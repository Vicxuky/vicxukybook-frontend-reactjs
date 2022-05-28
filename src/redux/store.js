import { configureStore } from "@reduxjs/toolkit";
import authReduce from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authReduce,
  },
});
