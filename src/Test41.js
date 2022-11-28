/**
 * * Program for React memo using function component
 * 
 * * Way for optimization technique
 * 
 * * This act as a Child Component
 */

 import React from "react";

 const Test41 = ({ todos }) => {
   console.log("child render");
   return (
     <>
       <h2>My Todos</h2>
       {todos.map((data, index) => {
         return <p key={index}>{data}</p>;
       })}
     </>
   );
 };
 
 export default React.memo(Test41);
 