import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ReduxCounterThree() {
  const [count, dispach] = useReducer(reducer, initialState);
  const [countTwo, dispachTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <div>Count - {count}</div>
        <button onClick={() => dispach("increment")}>Increment</button>
        <button onClick={() => dispach("decrement")}>Decrement</button>
        <button onClick={() => dispach("reset")}>Reset</button>
      </div>
      <div>
        <div>Count - {countTwo}</div>
        <button onClick={() => dispachTwo("increment")}>Increment</button>
        <button onClick={() => dispachTwo("decrement")}>Decrement</button>
        <button onClick={() => dispachTwo("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default ReduxCounterThree;
