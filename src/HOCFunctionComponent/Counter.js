/**
 * * custom hook => replacement for Higher Order Component
 * * Definition => whenever we wanted a reusable logic for many components that time we can write that reusable logic inside a custom hook and use it in our normal component by calling it like a normal function. It returns different types of values like object,array,JSX,variable etc.
 * * while using custom hook the name of custome hook must start with "use" keyword e.g useHOC is the name of custom hook
 * * 
 * 
 * * while using HOC we need to 
 */

import React from 'react'
import useHOC from './useHOC'

const Counter = () => {

// const [count, clickHandler] = useHOC();
const {count, clickHandler} = useHOC();
// const count = useHOC();
  return (
    <button onClick={clickHandler}>Increment {count} times</button>
  )
}

export default Counter