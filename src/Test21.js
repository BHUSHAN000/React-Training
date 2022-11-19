/**
 * Program is for checking browser's focusing tab and blurring of tab 
 * 
 */

import React, { useEffect } from "react";

// User has switched back to the tab
const onFocus = (selectedDocReno) => {
    console.log("Tab is in focus",selectedDocReno);
};

// User has switched away from the tab (AKA tab is hidden)
const onBlur = () => {
    console.log("Tab is blurred");
};

const Test21 = () => {
    const selectedDocReno = Number(new URLSearchParams(window.location.search).get("selectedDocReno"));

    useEffect(() => {
        window.addEventListener("focus", () => onFocus(selectedDocReno));
        window.addEventListener("blur", onBlur);
        // Calls onFocus when the window first loads
        onFocus();
        // Specify how to clean up after this effect:
        return () => {
            window.removeEventListener("focus", onFocus);
            window.removeEventListener("blur", onBlur);
        };
  }, [selectedDocReno]);

    return <>Hello</>;
};

export default Test21;