import React, { useReducer } from "react";
const initialState = {counter : 0};

const reducer =(state,action) => {
    switch(action){
        case 'increment' : return {counter: state.counter + 1};
        case 'decrement' : return {counter: state.counter - 1};
        case 'reset' : return initialState;
        default: return state;
    }
}

const TestReducer2 = () => {
  const [data, setData] = useReducer(reducer,initialState);
  return <>
    <h1>{data.counter}</h1>
    <button onClick={() => setData('increment')}>+</button>
    <button onClick={() => setData('decrement')}>-</button>
    <button onClick={() => setData('reset')}>reset</button>
    <button onClick={() => setData('')}>Default</button>
  </>;
};

export default TestReducer2;
