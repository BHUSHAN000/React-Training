/**
 * * Program for conditional rendering of JSX i.e button text
 */

import React, { Component } from 'react'

export default class Test2 extends Component {

    state={
        val:true
    }

    clickHandler = () => {
        this.setState({val: !this.state.val});
   
    }

  render() {
    return (
        <>
            <h1>Hi this is {this.state.val ? 'Bhushan': 'harshu'}</h1>
            <button onClick={this.clickHandler}>
                click me
            </button>
        </>
        )
    }
}


