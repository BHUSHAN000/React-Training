import { useEffect,useState } from "react";

const Test38 = (props) => {

    const [mousexPosition, setmousexPosition] = useState(null)
    const [mouseyPosition, setmouseyPosition] = useState(null)
    const [counter,setCounter] = useState(0);
    const mouseMovement = (e) =>{
        console.log('mouse moved',e.clientX,e.clientY);
        setmousexPosition(e.clientX)
        setmouseyPosition(e.clientY)
    }

    useEffect(() => {
        console.log("In useEffect Test38 ",counter);
        window.addEventListener('mousemove',mouseMovement)
        return () => {
            console.log("in unmounting");
            window.removeEventListener('mousemove',mouseMovement)
        }
    }, [counter]);

    const clickHandlerIncrment=()=> {
        console.log('In Test38 increment handler')
        setCounter(prevCounter => prevCounter +1)
    }
    return (
        <>
            <p>{counter}</p>
            <button onClick={clickHandlerIncrment}>increment</button>
            <br/>

            x-{mousexPosition}& y-{mouseyPosition}
            <br/>
            <button onClick={props.clickHandler}>Click</button>
        </>
    );
};

export default Test38;
