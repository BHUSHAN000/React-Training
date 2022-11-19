/**
 * * Program for rending of list on UI
 * * while rending a list on UI need to used map method so that for each element in an array we can create a separate list element i.e <li>{element}</li>
 * * but while rending a list on UI always remember that we have to make each li element unique by assing key attribute to respective li element and always assign a unique value in that key attribute
 * * the passed key attribute to li act as a prop to li element but we can access or can't get that value as a prop in li element i.e key attribute or prop act as readonly in that component
 * * still if we wanted to use the value passed to the key attribute then we need to create a separate prop which can hold that unique value and can be accessed as a prop while rending on UI
 * 
 * * this program is used as a parent component
 */

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
