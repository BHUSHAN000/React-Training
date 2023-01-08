/**
 * * custom hook => replacement for Higher Order Component
 * * Definition => whenever we wanted a reusable logic for many components that time we can write that reusable logic inside a custom hook and use it in our normal component by calling it like a normal function. It returns different types of values like object,array,JSX,variable etc.
 * * while using custom hook the name of custome hook must start with "use" keyword e.g useHOC is the name of custom hook
 * * 
 * 
 * * while using HOC we need to 
 */

import { useState } from "react";

const useHOC = () => {

    const [count,setCount]  = useState(0);

    const clickHandler = () => {
        setCount(count+ 1);
    }
    const hoverHandler =() =>{
        setCount(count+ 1); 
    }

    // return [count, clickHandler,hoverHandler];
    return {
        count: count,
        clickHandler: clickHandler,
        hoverHandler: hoverHandler
    }

    // return count

}

export default useHOC;