/**
 * * Program for Mounting phase in class components as parent component
 * * It have 4 lifecycle methods
 * * 1) first lifecycle method => constructor
 * * 2) second lifecycle method => static getDerivedStateFromProps(props, state)
 * * 3) render()
 * * 4) componentDidMount()
 * 
 *  * Program for updating phase in class components as child component
 *  * It have 5 lifecycle methods
 *  * first lifecycle method in updating phase => static getDerivedStateFromProps(props, state)
 * * second lifecycle method => shouldComponentUpdate(nextProps,nextState)
 * * third lifecycle method => render()
 * * fourth lifecycle method => getSnapshotBeforeUpdate(prevProps,prevState)
 * * fifth lifecycle method => componentDidUpdate(prevProps,prevState,snapshot)
 * 
 * * It also includes unmounting phase in the same class component 
 * * it only have 1 method 
 * * method is => componentWillUnmount()
 * 
 * * // Rules
 * * 1) extra side-effects can only be called in componentDidMount lifecycle method
 * * 2) getDerivedStateFromProps won't allow you to use this operator
 * * 3) getDerivedStateFromProps will return null if no changes done in state otherwise if changes done in state then return that updated state value
 * 
 * * This program is act as parent component
 */

import { useState } from "react";
import Test20 from "./Test20";

export default function Test19() {
  const [counter, setCounter] = useState(0);
  const handler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <div className="App">
      <Test20 handler={handler} counter={counter} />
    </div>
  );
}
