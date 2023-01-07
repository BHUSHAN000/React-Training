/**
 *  FORWARDING REFs 
 *  Write a program using uncontrolled component for getting value of input i.e from child component and
 *  show it using parent component in console
 *
 *  useRef() => it returns a ref value
 */

import React, { useRef } from "react";
import Test49 from "./Test49";

const Test48 = () => {
  const inputRef = useRef(null);

  const clickHandler = () => {
    console.log(inputRef.current.value);
  };
  console.log(inputRef)
  
  return (
    <>
      <Test49 name='bhushan' ref={inputRef} />
      <br />
      <br />
      <button onClick={clickHandler}>Get Value</button>
    </>
  );
};

export default Test48;
