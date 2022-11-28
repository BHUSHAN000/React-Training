import React,{useState} from 'react'
import Test45 from './Test45'

const Test44 = () => {
    const [data,setData] = useState('');
   // const [data1,setData1] = useState('');
    const changeHandler=(e)=>{
        setData(e.target.value);
    }

    const changeHandler1=(e)=>{
        setData(e.target.value);
    }

  return (
    <>
    <input type="text" value={data}  onChange={changeHandler} />
    {/* <input type="text" value={data} onChange={changeHandler1}/> */}
    <Test45 aa={data} bb={changeHandler1}  /> 
    </>
  )
}

export default Test44