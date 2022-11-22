/**
 * * Program for hooks in Function component/Presentational component/ Dumb component / stateless component
 * 
 * * before 16.8 version of react's Function component were used as a Presentational component/ Dumb component / stateless component because it was only used for showing the data and we were not storing any state or data in a variable
 * 
 * * in 16.8 they have introduce the feature where we can able to store a data in a state / local varible
 * * with that they have introduce some methods which can be used for storing state , replacing the existing lifecycle methods etc.
 *
 * 1) useState() hook => it returns an array which having 2 elements =>  1st value, 2nd setter function
 *
 */

import React ,{useState} from 'react';

const Test31 = () => {
    const [name,setName]= useState('Bhushan');      // it returns an array

    const handler=()=>{
        setName('Rutul')
    }
  return (
    <>
        <div>{name}</div>
        <button onClick={handler}>Click</button>
    </>
  );
};

export default Test31;


// // creation of state -1st way
// state={
//     name:'bhushan'
// }

// // creation of state -2nd way
// constructor(props){
//     super(props);
//     this.state={
//         name:'bhushan'
//     }
// }

// // changing the state value
// this.setState({name:'Rutul'})
// setName('Rutul')



//state access way
// this.state.name



// const [count,setCount] =useState(0)