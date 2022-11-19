import React, { Component } from 'react'
import Test13 from './Test13';
// Parent component
export default class Test12 extends Component {

    callingMethod =(lname) => {              // method in parent
        console.log('Method called',lname,this);
    }
  render() {
    return (
        <Test13 name='bhushan' callingMethod={this.callingMethod}/>
        )
  }
}
