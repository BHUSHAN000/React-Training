import React, { Component } from "react";
import Child from "./Child";
// import { parentContextName } from "./Context";
export default class Parent extends Component {
    // state={
    //     count: 0
    // }
  render() {
    return (
      <>
        <div>Parent</div>
        {/* <parentContextName.Provider value={this.state.count}> */}
        <Child />
        {/* </parentContextName.Provider> */}
      </>
    );
  }
}
