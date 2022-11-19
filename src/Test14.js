/**
 * * Program for showing two way binding in react
 * * Normally React follows one directional data binding i.e data flow means we can pass data from parent to child using props
 * * but if we wanted to achieve the scenario where we wanted to pass data from child to parent component then we can achieve this by sending callback as a prop to the child component from parent component and child component can pass a parameter to that prop's callback method so that the parameter will get in parent component
 * 
 * * below program is act as a child component for this scenario
 */

import React, { Component } from 'react'

// Child Component
export default class Test14 extends Component {
  render() {
    return (
      <div>
      {this.props.name}
      <button onClick={() =>this.props.callingMethod('dhomse')}>Clicked</button>
      </div>
    )
  }
}
