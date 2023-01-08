import React from 'react'

const Test = (props) => {
  return (
    <>
    <h1>{props.lname}</h1>
    <h2>{props.children}</h2>

    </>
  )
}

export default Test