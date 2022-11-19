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
