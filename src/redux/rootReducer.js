import { combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./counter/counterSlice";
import { userSlice } from "./user/userSlice";

export const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  user: userSlice.reducer,
});
