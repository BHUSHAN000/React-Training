/**
 * * HOC => Higher Order Component
 * * Definition => whenever we wanted to reuse the code then we can write in HOC. It always take a component as a parameter in it and returns a enhanced component from it
 * 
 * * while using HOC we need to pass the component to HOC at the time of exporting component e.g HOC(Counter) i.e we are passing Counter component to HOC 
 */

import React, { Component } from "react";
import HOC from './HOC';
class Hover extends Component {
  render() {
    return (
      <h4 onMouseOver={this.props.clickHandler}>Hover {this.props.count} times</h4>
    );
  }
}

export default HOC(Hover);
