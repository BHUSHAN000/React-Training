/**
 * Program for interview perspective
 * This program is used for showing  useEffect working and how to avoid extra calling of useEffect in react 18 version
 * 
 * * There are 2 ways for avoiding extra rendering of useEffect
 * * 1) by removing StrictMode from idex.js file
 * * 2) by removing that interval from unmounting part of useEffect or if we used eventListerner in useEffect then remove that event listener from unmounting part of useEffect
 */

import React, {useState, useEffect } from 'react'

const Test39 = () => {
  const [counter,setCounter] = useState(0);
  useEffect(() => {
    console.log('in useEffect');
    let res;
    res=setInterval(() =>{
      setCounter(prevCounter => prevCounter + 1);
    } ,1000);
    return () => {
      console.log('In unmounting useEffect');
      clearInterval(res);
    }
  },[]);

  return (
    <div>{counter}</div>
  );

}

export default Test39