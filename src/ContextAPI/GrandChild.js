import React, { Component } from "react";
import contextName,{/* parentContextName */} from "./Context";
import GreateGrandChild from "./GreateGrandChild";

export default class GrandChild extends Component {
    static contextType = contextName;
  render() {
    return (
      <>
        <div>GrandChild</div>
        {/* <contextName.Consumer> */}
        <h1>{this.context.address}</h1>
        {/* </contextName.Consumer> */}
        <GreateGrandChild />
      </>
    );
  }
}
