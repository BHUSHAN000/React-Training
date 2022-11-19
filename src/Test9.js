/**
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
import Test1 from "./Test1";
import "./styles.css";

export default class Test9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      renderOrNot: true
    };
    console.log('In constructor Test9');
  }
  static getDerivedStateFromProps(props, state) {
    console.log("In Test9 derive state from props");
    console.log(props);
    console.log(state);
    if(props.name !== state.name) {
      return {name : props.name}
    }
    return null;
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('In shouldComponentUpdate Test9', nextProps,nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('In getSnapshotBeforeUpdate Test9', prevProps,prevState);
    return '11';
  }
  
  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('In componentDidUpdate Test9', prevProps,prevState,snapshot);
  }
  
  componentWillUnmount(){
    console.log('Component unmounted Test9');
  }
  
  handlerClick = () => {
    this.setState({ renderOrNot: false });
  };

  render() {
    console.log("In Test9 render");

    return (
      <>
        this.state.renderOrNot?
        <Test1 name={this.state.name} handlerClick={this.handlerClick} />:
        null
      </>
    );
  }
}
