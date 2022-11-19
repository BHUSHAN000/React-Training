/**
 *  * program for conditional rendering of css
 */

import React, { Component } from 'react'
export default class Test1 extends Component {
    state={
        val: true
    }

    clickHandler=()=> {
       this.setState({val:!this.state.val});
    }
   
    render() {
        return (
            <>
                <div className={`test1DivClass ${this.state.val ? "bluebackground": "redbackground"}`}>Hello</div>
                <button onClick={this.clickHandler}>Click to change color</button>
                
            </>
        )
    }
  
}