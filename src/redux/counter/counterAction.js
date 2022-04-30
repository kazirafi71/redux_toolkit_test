import { counterSlice } from "./counterSlice";

const { actions: slice } = counterSlice;

export const increaseValueAction = (val) => (dispatch) => {
  dispatch(slice.increaseValue(val));
};
