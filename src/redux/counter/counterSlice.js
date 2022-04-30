import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 10,
    isPress: false,
  },

  reducers: {
    increaseValue: (state, action) => {
      state.count = state.count + action.payload;
      state.isPress = true;
    },
  },
});
