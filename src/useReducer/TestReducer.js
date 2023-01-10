import React from "react";
import { useState } from "react";

const TestReducer = () => {
  const [data, setData] = useState({
    name: "Bhushan",
    counter: 0,
    address: "Pune",
  });
  return (
    <>
      <div>TestReducer</div>
      <h4>{data.name}</h4>
      <h4>{data.counter}</h4>
      <h4>{data.address}</h4>
      <button onClick={() => setData({...data,name:'Rutul'})}>Change Name</button>
      <button onClick={() => setData({...data, counter: data.counter + 1})}>Change Counter</button>
      <button onClick={() => setData({...data, address: 'Dhule'})}>Change Address</button>
    </>
  );
};

export default TestReducer;
