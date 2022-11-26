/**
 * * Program for React memo using function component
 * 
 * * Way for optimization technique
 * 
 * * This act as a parent Component
 */

 import { useState } from "react";
 import Test41 from "./Test41";
 
 const Test40 = () => {
   const [count, setCount] = useState(0);
   const [todos, /* setTodos */] = useState(["todo 1", "todo 2"]);
 
   const increment = () => {
     setCount((c) => c + 1);
   };
 
   return (
     <>
       <Test41 todos={todos} />
       <hr />
       <div>
         Count: {count}
         <button onClick={increment}>+</button>
       </div>
     </>
   );
 };
 
 export default Test40;
 