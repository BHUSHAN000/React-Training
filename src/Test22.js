/**
 * * Program for handing forms and its events and values
 * * Program using Class component
 */

import React, { Component } from 'react';

export default class Test22 extends Component {
    changeHandler = (event) =>{
        event.preventDefault();
        console.log(event.target.value)
    }
  render() {
    return (
      <>
        <form>
            <label htmlFor='Username'>Username </label>
            <input type='text' name='Username' defaultValue='Bhushan' onChange={this.changeHandler}/>
        </form>
      </>
    )
  }
}

