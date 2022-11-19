/**
 * * Program for Mounting phase in class components as child component
 * * It have 4 lifecycle methods
 * * 1) first lifecycle method => constructor
 * * 2)[] second lifecycle method => static getDerivedStateFromProps(props, state)
 * * 3) render()
 * * 4) componentDidMount()
 * 
 * * // Rules
 * * 1) extra side-effects can only be called in componentDidMount lifecycle method
 * * 2) getDerivedStateFromProps won't allow you to use this operator
 * * 3) getDerivedStateFromProps will return null if no changes done in state otherwise if changes done in state then return that updated state value
 */
import React, { Component } from 'react'

export default class Test18 extends Component {
  constructor(props){
    super(props);
    console.log('In constructor of Test18');
    this.state={
      name:'bhushan',
      add: 'Pune'
    }
  }

  static getDerivedStateFromProps(props,state){
    console.log('In getDerivedStateFromProps of Test18', props,state);
    return { name: 'rutul' };
  }

  componentDidMount(){
    console.log('In Component Did mount of Test18',this.state);
    
  }
  
  render() {
    console.log('In Render method of Test18')
    return (
        <>
        {this.state.name}
        </>
    )
  }
}


