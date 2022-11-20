/**
 * * Program for handing forms and its events and values
 * * Program using Function component
 */
import React from 'react'

const Test23 = () => {
    const clickHandler = (event) =>{
        event.preventDefault();
        console.log(event.target.value)
    }
  return (
    <>
        <form>
            <label htmlFor='Username'>Username </label>
            <input type='text' name='Username' defaultValue='Bhushan' onChange={clickHandler}/>
        </form>
      </>
  )
}

export default Test23