import React, { useReducer } from "react";

type CounterStateType = {
  count: number;
};
type IncrementDecrementActionType = {
  type: "increment" | "decrement";
  payload: number;
};
type RestActionType = {
  type: "reset";
};
type CounterActionType = IncrementDecrementActionType | RestActionType;

const initialState = { count: 0 };
function reducer(state: CounterStateType, action: CounterActionType) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        +
      </button>
      {state.count}
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>リセット</button>
    </div>
  );
};

export default UseReducer;
