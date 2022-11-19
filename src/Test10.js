/**
 *  * again same example 
 * 
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


 */
import React from "react";

export default class Test10 extends React.Component {
  constructor(props){
    super(props);
    this.state={
        name:'Bhushan'
    }
}

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps Test10", props, state);
    if (props.name !== state.name) {
      return { name: props.name };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate Test10", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate Test10", prevProps, prevState);
    return { prevProps, prevState };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate Test10", prevProps, prevState,snapshot);
    
  }

  componentWillUnmount() {
    alert("component will unmount");
    
  }
  render() {
    console.log("In Test10 render", this.props.name, this.state.name);

    return (
      <>
        <h1>{this.state.name}</h1>
        <button onClick={this.props.handlerClick}>Click to change name</button>
      </>
    );
  }
}
