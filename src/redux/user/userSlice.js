import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: "",
    isLoading: false,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setFetchLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
