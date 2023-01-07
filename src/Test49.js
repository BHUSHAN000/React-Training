/**
 *  FORWARDING REFs 
 *  Write a program using uncontrolled component for getting value of input i.e from child component and
 *  show it using parent component in console
 *
 *  useRef() => it returns a ref value
 *  1st example using function component
 *  2nd example using class component
 */
import React, { forwardRef } from "react";

// const Test49 = forwardRef((props,ref) => {
//   return (
//     <>
//       <h1>{props.name}</h1>
//       <input type="text" ref={ref} />
//     </>
//   );
// });

// export default Test49;

const Test49 = forwardRef((props,ref) => {
    class Test extends React.Component {
        render() {
            return(
                <>
                    <h1>{props.name}</h1>
                    <input type="text" ref={ref} />
                </>
            ) 
        }
    }
    return <Test />
})
export default Test49;
