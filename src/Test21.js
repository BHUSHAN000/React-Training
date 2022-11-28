/**
 * Program is for checking browser's focusing tab and blurring of tab 
 * 
 */

// import React, { useEffect } from "react";

// // User has switched back to the tab
// const onFocus = (selectedDocReno) => {
//     console.log("Tab is in focus",selectedDocReno);
// };

// // User has switched away from the tab (AKA tab is hidden)
// const onBlur = () => {
//     console.log("Tab is blurred");
// };

// const Test21 = () => {
//     const selectedDocReno = Number(new URLSearchParams(window.location.search).get("selectedDocReno"));

//     useEffect(() => {
//         window.addEventListener("focus", () => onFocus(selectedDocReno));
//         window.addEventListener("blur", onBlur);
//         // Calls onFocus when the window first loads
//         onFocus();
//         // Specify how to clean up after this effect:
//         return () => {
//             window.removeEventListener("focus", onFocus);
//             window.removeEventListener("blur", onBlur);
//         };
//   }, [selectedDocReno]);

//     return <>Hello</>;
// };

// export default Test21;


import { useCallback, useEffect, useState } from "react";
export default function Test21() {
  const selectedDocReno = Number(
    new URLSearchParams(window.location.search).get("id")
  );
  let padeId=Window | null;
  const [val, setVal] = useState(null);
  const handler = () => {
    padeId = window.open("https://www.google.com?id=112", "mywindow");
    console.log(padeId);
    setVal(padeId);
  };
  const onFocus = useCallback(() => {
    padeId && window.open(`https://www.google.com?id=112`, "mywindow");
  },[padeId]);

  // User has switched away from the tab (AKA tab is hidden)
  const onBlur = () => {
    console.log("Tab is blurred");
  };

  useEffect(() => {
    window.addEventListener("focus", () => onFocus());
    window.addEventListener("blur", onBlur);
    // Calls onFocus when the window first loads
    onFocus();
    // Specify how to clean up after this effect:
    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, [onFocus]);

  return (
    <div className="App">
      <h1>App</h1>
      <button onClick={handler}>Open webpage</button>
    </div>
  );
}
