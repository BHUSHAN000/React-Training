/**
 *  * Program for handing forms and its events and values using uncontrolled components
 *  * Program using Class component
 * 
 *  * This is an example of Uncontroll component
 *  * Uncontroll Component => if we are not using events for handling a state and we not keeping the value in state then By default the element's state is maintained inside the DOM tree like HTML 
 *
 *   * (NOTE: In HTML, we were using the methods like getElementById, getElementsByClassName, getElementsByTagName etc. for getting the value of element from DOM tree)
 *
 *  
 *  * But in react we are not using these methods instead of that we can use refs
 * 
 *  * Uncontrol component is not handled by an event object i.e event.target.value, it is handled by refs
 * 
 *  * Here we are getting value of input field by clicking the button of form 
 * 
 *  * ref can be created by
 *      this.refName = React.createRef(); 
 * 
 * * this act as a child
 */

import React, { Component } from 'react'

export default class Test30 extends Component {
  render() {
    return (
        <input type='text' ref={this.props.childRef}/>  
    )
  }
}
