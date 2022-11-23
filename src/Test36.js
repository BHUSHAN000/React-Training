/**
 * * Program for useEffect hook in function component
 * 
 * * useEffect() hook is use as a replacement method for componentDidMount , componentDidUpdate, and componentWillUnmount lifecycle methods
 * 
 * 
 * * componentDidMount => this will be executed only once in a lifetime
 *          useEffect(() => {
 *              console.log('in useEffect')
 *          },[])
 * 
 * * componentDidUpdate => this will be executed only once in a lifetime
 *          useEffect(() => {
 *              console.log('in useEffect')
 *          },[dependantUseStateVariable])
 * 
 * * NOTE: if we are not writing dependancy array in an useEffect hook then that useEffect will get call continuously i.e infinitely
 * 
 *          useEffect(() => {
            console.log('In useEffect hook') 
            }) 
 */


import React, { useEffect, useState } from 'react'

const Test36 = () => {
    const [counter1, setCounter1] =useState(0);
    const [counter2, setCounter2] =useState(10);

    useEffect(() => {
       console.log('In useEffect hook') 
    },[counter1,counter2])           // dependancy array

    const clickHandler=()=>{
        setCounter1(prevCounter => prevCounter +1)
    }
    const clickHandler2=()=>{
        setCounter2(prevCounter => prevCounter - 1)
    }
    return (
        <>
        {counter1}
        <button onClick={clickHandler}>Increment</button>
        {counter2}
        <button onClick={clickHandler2}>Decrement</button>
        </>
    )
}

export default Test36