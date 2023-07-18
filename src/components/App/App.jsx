import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputNum, resetNum } from "../../store/actions/actions";

const App = () => {
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const HandleNum = (e) => {
    e.preventDefault();
    dispatch(inputNum(e.target.userNum.value, randomNum));
    e.target.reset();
  };

  const reseFun = () => {
    dispatch(resetNum());
    setRandomNum(Math.floor(Math.random() * 100));
  };
  return (
    <>
      {" "}
      <div>
        <h1>Отгодай число</h1>
      </div>
      <>
        <form onSubmit={HandleNum}>
          <input type="number" name="userNum" />
          <input type="submit" />
        </form>
        <>
          <h1>{state.title}</h1>
          {state.completed ? (
            <button onClick={reseFun}>{state.description}</button>
          ) : (
            <p>{state.description}</p>
          )}
        </>
      </>
    </>
  );
};

export default App;
