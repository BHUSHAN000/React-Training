import React, { Component } from 'react'
import Test17 from './Test17';


export default class Test16 extends Component {

    state={
        data:['bhushan','rutul','harsh','priyanka']
    }
  render() {
    const res= this.state.data.map((ele,index) => <Test17 key={index} i={index} name={ele}/>)
    return (
        <>
            {res}
        </>
    )
  }
}
