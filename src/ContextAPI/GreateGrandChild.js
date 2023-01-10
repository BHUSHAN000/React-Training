import React, { useContext } from 'react';
import Child from './Child';
import contextName from './Context';
import GrandChild from './GrandChild';

const GreateGrandChild = () => {
    const contextData = useContext(contextName);
  return (
    <>
        <p>GreateGrandChild</p>
        <h1>{contextData.address}</h1>
    </>
  )
}

export default GreateGrandChild;


// Grandparent     1) function 2)class 3) function 4) class
// parent          1) function 2)class 3) class 4) function
// Child           1) function 2)class 3) class 4) function
// GrandChild      1) function 2)class 3) class 4) functoin