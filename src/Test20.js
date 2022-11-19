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
 */

import React from "react";
import axios from 'axios';

class Test20 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterInner: 0
    };
    console.log('In constructor of Test20');
  }
  
  componentDidMount(){
    console.log('In Component Did mount of Test20',this.state);
    
  }
  static getDerivedStateFromProps(props, state) {
    console.log("In getderivedStatefromprops of Test20", props, state);
    if (props.counter !== state.counterInner) {
      return { counterInner: 10 };
    } else {
      return null;
    }
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log("In shouldComponentUpdate of Test20", nextProps, nextState);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("In getsnapshot before update of Test20", prevProps, prevState);
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log(data.data));
    return 11;
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("In component did update of Test20", snapshot);
  }
  render() {
    console.log("In Render of Test20");

    return (
      <>
        {this.props.counter}
        <button onClick={this.props.handler}>Increment</button>
      </>
    );
  }
}

export default Test20;
