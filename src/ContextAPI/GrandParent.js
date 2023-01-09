/***
 * * Context API => it is a way to pass data from root component or parent component to its child component
 * * It bypasses the prop drilling scenario
 * * for creation of context use this syntax
 *      const contextName = React.createContext()
 */

import React, { Component } from "react";
import Parent from "./Parent";
import contextName from "./Context";
export default class GrandParent extends Component {
  state = {
    name: "Bhushan",
    counter: 0,
    address:'Pune'
  };
  render() {
    return (
      <>
        <div>GrandParent</div>
        <contextName.Provider value={this.state}>
          <Parent />
        </contextName.Provider>
      </>
    );
  }
}
