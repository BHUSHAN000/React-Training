/**
 * * Program for Pure Component using Class component
 * 
 * * Way for optimization technique
 * 
 * * This act as a Parent Component
 */

import React, { Component } from 'react'
import Test27 from './Test27'

export default class Test26 extends Component {
    state={
        data:'Pune'
    }
    clickHandler=()=> {
        this.setState({data: 'Mumbai'});
    }

    render() {
        console.log('Test26');
        return (<>
            <button onClick={this.clickHandler}>Click Me</button>
            <Test27 name={this.state.data}/>
        </>
        )
    }
};
