import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import uiReducer from "./uiSlice";
import voteReducer from "./voteSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    vote: voteReducer
  },
});
