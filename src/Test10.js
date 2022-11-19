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
