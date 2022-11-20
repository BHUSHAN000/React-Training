/**
 * * Program for handing forms and its events and values
 * * Program using Class component
 * 
 * * This is an example of Controll component
 * * Controll Component => whenever we are storing a state in a local variable of a class or function component and we are using the same variable for any changes or updation in that input field and maintaining updated value in the same
 *  * Control component is handled by an event object i.e event.target.value
 */
 import React, { Component } from "react";

 export default class Test24 extends Component {
   state = {
     name: "Bhushan"
   };
   changeHandler = (event) => {
     event.preventDefault();
     console.log(event.target.value);
     this.setState({ name: event.target.value });
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
         </form>
       </>
     );
   }
 }
 