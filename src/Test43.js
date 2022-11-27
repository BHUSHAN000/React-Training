/**
 * * Program for Uncontrolled Component using Functional Component 
 * 
 * for uncontrolled component implementation we need to use a react hook => useRef()
 * * ref can be created by in function component
 *      const inputRef = React.useRef(null); 
 */
import React,{useState, useRef} from 'react'

const Test43 = () => {
    const inputRef = useRef(null); 
  const [heading,setHeading]=useState("")
    // const changeHandler =() => {
    //     console.log(inputRef.current.value)
    // }
    const clickHandler=()=>{
        setHeading(inputRef.current.value);
    }
    const clearHandler=()=>{
        inputRef.current.value=""
        setHeading("");
    }

    return (<>
    <input type='text' ref={inputRef}/>
    <button onClick={clickHandler}>Click</button>
    <button onClick={clearHandler}>Clear</button>
    <h1>{heading}</h1></>
  )
}

export default Test43