/**
 * * Program for conditional rendering of JSX using useState hook 
 * 
 * * before 16.8 version of react's Function component were used as a Presentational component/ Dumb component / stateless component because it was only used for showing the data and we were not storing any state or data in a variable
 * 
 * * in 16.8 they have introduce the feature where we can able to store a data in a state / local varible
 * * with that they have introduce some methods which can be used for storing state , replacing the existing lifecycle methods etc.
 *
 * 1) useState() hook => it returns an array which having 2 elements =>  1st value, 2nd setter function
 *
 * 
 * 
 */

 import React, { useState } from 'react';

 const Test35 = () => {
 
    const [booleanStatus, setbooleanStatus] = useState(true);

    const showText = () => {
     setbooleanStatus(true)
    }
    const hideText = () => {
    setbooleanStatus(false)
    }
    return (
        <>
        {booleanStatus ? <h1>Hello</h1> : <h1>""</h1>}
        {booleanStatus && <h1>Hello</h1>}
        <br/>
        <br/>
        <button onClick={showText}>ShowText</button>
        <button onClick={hideText}>HideText</button>
        </>
    );
 };
 
 export default Test35;