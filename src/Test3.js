/**
 * program for just testing props value on child component 
 * but we needed to pass name prop from parent component
 * like <App name='bhushan' />
 */

import React, { Component } from 'react'
export default class Test3 extends Component {
  render() {
    return (
        <>
            <h1>{this.props.name}-Test3</h1>
        </>
    )
  }
}
