/**
 * * Program for handling events in react
 * * Event Handling
 * * Event Handling with parameter passing
 * 
 * * There are many ways for handling events
 * * 1) normal way
 * * 2) arrow function way of caller way
 * * 3) normal function way of calling by binding it in constructor with this object
 * * 4) arrow function way of calling at the time of definition of function
 * * 5) passing parameter 

 */

// Event Handling
// Event Handling with parameter passing

import React, { Component } from 'react'

export default class Test11 extends Component {

    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    // arrow function for event handler
    // clickHandler=(name,e)=> {
    //     console.log('Button Clicked',name,e)
    // }
    
    // normal function for event handler
    clickHandler(name,e){
        console.log('Clicked',name,e)
    }
  render() {
    return (
        // <button onClick={this.clickHandler}>Click Me</button> // normal way of calling
        
        // <button onClick={() => this.clickHandler()}>Click Me</button> // arrow function way of caller waynormal function way of calling by binding it in constructor with this object
        
        // <button onClick={this.clickHandler}>Click Me</button> // 
        
        // <button onClick={this.clickHandler}>Click Me</button> // arrow function way of calling at the time of definition of function

        <button onClick={() => this.clickHandler('bhushan',this)}>Click Me</button> // passing parameter 
        )
  }
}
