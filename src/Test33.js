/**
 * * Program for changing state value using useState hook
 * 
 * * before 16.8 version of react's Function component were used as a Presentational component/ Dumb component / stateless component because it was only used for showing the data and we were not storing any state or data in a variable
 * 
 * * in 16.8 they have introduce the feature where we can able to store a data in a state / local varible
 * * with that they have introduce some methods which can be used for storing state , replacing the existing lifecycle methods etc.
 *
 * 1) useState() hook => it returns an array which having 2 elements =>  1st value, 2nd setter function
 *
 */

import React, { useState } from 'react';

const Test33 = () => {

    const [counter, setCounter] = useState(0);

    const increHandler = () => {
        setCounter(prevCounter => prevCounter +1);
    }
    const decreHandler = () => {
        setCounter(prevCounter => prevCounter -1);

    }
    return (
        <>
        {counter}
        <br/>
        <br/>
        <button onClick={increHandler}>Increment</button>
        <button onClick={decreHandler}>Decrement</button>
        </>
    );
};

export default Test33;