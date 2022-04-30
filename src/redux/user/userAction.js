import Axios from "axios";
import { userSlice } from "./userSlice";
const { actions: slice } = userSlice;

export const getUserInfo = () => {
  return (dispatch) => {
    dispatch(slice.setFetchLoading(true));
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        dispatch(slice.setUserInfo(result.data));
        dispatch(slice.setFetchLoading(false));
      })
      .catch((error) => {
        dispatch(slice.setFetchLoading(false));
        console.log(error);
      });
  };
};
