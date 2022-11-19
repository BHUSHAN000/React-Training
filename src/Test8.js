/**
 * * Program for Mounting phase in class components as child component
 * * It have 4 lifecycle methods
 * * 1) first lifecycle method => constructor
 * * 2)[] second lifecycle method => static getDerivedStateFromProps(props, state)
 * * 3) render()
 * * 4) componentDidMount()
 * 
 * * // Rules
 * * 1) extra side-effects can only be called in componentDidMount lifecycle method
 * * 2) getDerivedStateFromProps won't allow you to use this operator
 * * 3) getDerivedStateFromProps will return null if no changes done in state otherwise if changes done in state then return that updated state value
 */
import React from "react";

export default class Test8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rutul"
    };
    console.log("In Test8 constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("In Test8 derive state from props");
    console.log(props);
    console.log(state);
    return null;
  }

  componentDidMount() {
    console.log("In Test8 component did mount");
  }
  render() {
    console.log("In Test8 render");

    return (
      <>
        <h1>Hello2</h1>
      </>
    );
  }
}
