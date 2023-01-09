import React, { Component } from "react";
import GrandChild from "./GrandChild";
import contextName from "./Context";
export default class Child extends Component {
  render() {
    return (
      <>
        <div>Child </div>
        <contextName.Consumer>
          {(data) => <h1>{data.name}</h1>}
        </contextName.Consumer>
          <GrandChild />
      </>
    );
  }
}
