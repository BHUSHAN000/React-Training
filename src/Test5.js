/**
 * program for showing css use in react by 4 ways
 * 1) internal
 * 2) inline
 * 3) external
 * 4) external but using css module
 */

import React, { Component } from 'react'
import style from './a.module.css';
import './b.css';

export default class Test5 extends Component {
    render() {
        const newStyle={
            color:'red',
            fontSize:'40px'
        }
    return (
      <>
        <h1 className={style.abc}>Test5</h1>
        <h1 className='abc'>Test6</h1>         
        <h1 style={newStyle}>Test7</h1>
        <h1 style={{color:'magenta'}}>Test8</h1>
      </>
    )
  }
}
//TEST5 => extenal
//TEST6 => external
//TEST7 => internal
//TEST8 => inline