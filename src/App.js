import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseValueAction } from "./redux/counter/counterAction";
import { getUserInfo } from "./redux/user/userAction";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { isLoading, userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  if (isLoading) {
    return <>Loading..</>;
  }
  return (
    <div className="App">
      <button>-</button>
      {count}
      <button onClick={() => dispatch(increaseValueAction(1))}>+</button>
      <ul>
        {userInfo &&
          userInfo?.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;
