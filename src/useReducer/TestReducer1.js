import React, { useReducer } from "react";
const initialState = 0;

const reducer =(state,action) => {
    switch(action){
        case 'increment' : return state+1;
        case 'decrement' : return state-1;
        case 'reset' : return initialState;
        default: return state;
    }
}

const TestReducer1 = () => {
  const [data, setData] = useReducer(reducer,initialState);
  return <>
    <h1>{data}</h1>
    <button onClick={() => setData('increment')}>+</button>
    <button onClick={() => setData('decrement')}>-</button>
    <button onClick={() => setData('reset')}>reset</button>
    <button onClick={() => setData('')}>Default</button>
  </>;
};

export default TestReducer1;
