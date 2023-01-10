import React, { useReducer } from "react";
const initialState = { counter: 0, booksCount: 10 };

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return { ...state,counter: state.counter + 1 };
    case "decrement":
      return { ...state,counter: state.counter - 1 };
    case "reset":
      return {...state,counter:initialState.counter};
    case "incrementBooks":
      return { ...state,booksCount: state.booksCount + 10 };
    case "decrementBooks":
      return { ...state,booksCount: state.booksCount - 10 };
    case "resetBooks":
      return {...state,booksCount:initialState.booksCount};
    default:
      return state;
  }
};

const TestReducer3 = () => {
  const [data, setData] = useReducer(reducer, initialState);
  return (
    <>
      <h1>{data.counter}</h1>
      <button onClick={() => setData("increment")}>+ Counter</button>
      <button onClick={() => setData("decrement")}>- Counter</button>
      <button onClick={() => setData("reset")}>reset Counter</button>
      <h1>{data.booksCount}</h1>
      <button onClick={() => setData("incrementBooks")}>+ Books</button>
      <button onClick={() => setData("decrementBooks")}>- Books</button>
      <button onClick={() => setData("resetBooks")}>reset Books</button>
    </>
  );
};

export default TestReducer3;
