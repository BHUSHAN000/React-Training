// Mounting phase example

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
