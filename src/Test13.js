import React, { Component } from 'react'
import Test14 from './Test14';
// Child Component
export default class Test13 extends Component {

  render() {
    return (
      <div>
      {this.props.name}
      <Test14  callingMethod={this.props.callingMethod}/>
      </div>
    )
  }
}
