/**
 * * Program for handing forms and its events and values
 * * Program using Class component
 * 
 * * This is an example of Controll component
 * * Controll Component => whenever we are storing a state in a local variable of a class or function component and we are using the same variable for any changes or updation in that input field and maintaining updated value in the same
 *  * Control component is handled by an event object i.e event.target.value
 * 
 *  * Here we are getting value of input field by clicking the button of form 
 */
 import React, { Component } from "react";

 export default class Test25 extends Component {
    state = {
        name: "Bhushan"
    };
    changeHandler = (event) => {
        event.preventDefault();
        this.setState({ name: event.target.value });
    };

    clickHandler=(e)=> {
        e.preventDefault();
        console.log(this.state.name)
    };

   render() {
     return (
       <>
         <form>
           <label htmlFor="Username">Username </label>
           <input
             type="text"
             name="Username"
             value={this.state.name}
             onChange={this.changeHandler}
           />
           <button onClick={this.clickHandler}>Click</button>
         </form>
       </>
     );
   }
 }
 