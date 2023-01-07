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
 */

import React from 'react'

export default class Test28 extends React.Component {
    constructor(props){
        super(props);
        this.inputRef= React.createRef();       // creation of ref in class component
    }

    componentDidMount(){
        this.inputRef.current.focus();
    }

    clickHandler=()=>{
        console.log(this.inputRef.current.value);       // fetcing value from ref
    }
  render() {
    console.log(this.inputRef)
    return (
      <>
        <input type='text' ref={this.inputRef} />   
        <br/>
        <br/>
        <button onClick={this.clickHandler}>Get value</button>
      </>
    )
  }
}

