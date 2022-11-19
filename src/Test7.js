/**
 * * Program for Mounting phase in class components as parent component
 * * It have 4 lifecycle methods
 * * 1) first lifecycle method => constructor
 * * 2) second lifecycle method => static getDerivedStateFromProps(props, state)
 * * 3) render()
 * * 4) componentDidMount()
 * 
 * * // Rules
 * * 1) extra side-effects can only be called in componentDidMount lifecycle method
 * * 2) getDerivedStateFromProps won't allow you to use this operator
 * * 3) getDerivedStateFromProps will return null if no changes done in state otherwise if changes done in state then return that updated state value
 */
import React from "react";
import "./styles.css";
import Test8 from "./Test8";

export default class Test7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Bhushan"
    };
    console.log("In Test7 constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("In Test7 derive state from props");
    console.log(props);
    console.log(state);
    return null;
  }

  componentDidMount() {
    console.log("In Test7 component did mount");
  }
  render() {
    console.log("In Test7 render");

    return (
      <>
        <h1>Hello1</h1>
        <Test8 />
      </>
    );
  }
}
