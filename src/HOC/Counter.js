/**
 * * HOC => Higher Order Component
 * * Definition => whenever we wanted to reuse the code then we can write in HOC. It always take a component as a parameter in it and returns a enhanced component from it
 * 
 * * while using HOC we need to pass the component to HOC at the time of exporting component e.g HOC(Counter) i.e we are passing Counter component to HOC 
 */

import React, { Component } from "react";
import HOC from './HOC';
class Counter extends Component {
  render() {
    return (
      <button onClick={this.props.clickHandler}>
        Increment {this.props.count} times
      </button>
    );
  }
}
export default HOC(Counter);
