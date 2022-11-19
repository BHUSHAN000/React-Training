/**
 * *Conditional rendering => JSX
 * * if-else
 * * element
 * * ternary operator
 * * && operator => short circuit operator
 */


import React, { Component } from 'react'

export default class Test4 extends Component {

    state={
        val:true
    }

    render() {
       
        return(
            <>
               {
                this.state.val && <h1>Bhushan</h1>
               }
               {
                !this.state.val && <h1>Guest</h1>
               }
            </>
        )
    }
}


// if login ? Bhushan : Guest