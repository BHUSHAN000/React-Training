/**
 * * Program for useEffect hook in function component
 * 
 * * useEffect() hook is use as a replacement method for componentDidMount , componentDidUpdate, and componentWillUnmount lifecycle methods
 * 
 * 
 * * componentDidMount => this will be executed only once in a lifetime
 *          useEffect(() => {
 *              console.log('in mounting useEffect')
 *          },[])
 * 
 * * componentDidUpdate => this will be executed only once in a lifetime
 *          useEffect(() => {
 *              console.log('in updating useEffect')
 *          },[dependantUseStateVariable])
 * 
 * * componentWillUnmount => this will be executed when the component get unmounted
 *          useEffect(() => {
 *              return () => {
 *                   console.log('in unmounting of component')
 *              }
 *          },[dependantUseStateVariable]);
 * 
 * 
 * * NOTE: if we are not writing dependancy array in an useEffect hook then that useEffect will get call continuously i.e infinitely
 * 
 *          useEffect(() => {
            console.log('In useEffect hook') 
            }) 
 */

import { useState ,useEffect} from "react";
import Test38 from "./Test38";

const Test37 = () => {
    const [data, setData] = useState(true);
    const [counter,setCounter] = useState(0);
    const clickHandler = () => {
        setData(false);
    };

    useEffect(() => {
      console.log('In useEffect Test37')
    }, [])
    const clickHandlerIncrment=()=> {
        console.log('In Test37 increment handler')
        setCounter(prevCounter => prevCounter +1)
    }
    return (
        <>
            <p>{counter}</p>
            <button onClick={clickHandlerIncrment}>increment</button>
            <br/>
            <h1>hello</h1>
            {data ? <Test38 clickHandler={clickHandler} /> : null}
        </>
    );
};

export default Test37;
