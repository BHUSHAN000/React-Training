/**
 * * Program for Controlled Component using Functional Component 
 * 
 */
import React, {useEffect, useState } from 'react'

const Test42 = () => {
  const [data,setData] = useState('');
  const [heading,setHeading]=useState('');
  useEffect(()=>{
    document.getElementsByTagName("input")[0].focus();
  });

  // window.onload =() => {
  //   document.getElementsByTagName("input")[0].focus();
  // }

  // window.onbeforeunload =() => {

  // }
  const changeHandler =(e) => {
    setData(e.target.value);
  }
  const clickHandler=()=>{
    setHeading(data);
  }
  const clearHandler=()=>{
    setHeading("");
    setData("");
  }
  return (
    <>
      <input type='text' value={data} onChange={changeHandler} />
      <button onClick={clickHandler}>Click</button>
      <button onClick={clearHandler}>Clear</button>
      <h1>{heading}</h1>
    </>
  )
}

export default Test42