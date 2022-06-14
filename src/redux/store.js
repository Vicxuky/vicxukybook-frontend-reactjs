import { configureStore } from "@reduxjs/toolkit";
import authReduce from "./authSlice";
import cartReduce from "./cartSlice";
import searchReduce from "./searchSlice";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  auth: authReduce,
  cart: cartReduce,
  search: searchReduce,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["search"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
