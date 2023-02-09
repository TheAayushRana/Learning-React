import React, { useRef } from "react";
import ChildButton from "./ChildButton";

function ImperativeHandleTutorial() {
  // Created a reference for button
  const buttonRef = useRef(null);

  return (
    <div>
      <button onClick={() => buttonRef.current.alterToggle()}>
        Button from Parent
      </button>
      {/* We cannot send ref to components like we do for html elements 
      If we send ref to components we need to use forwardRef
      */}
      <ChildButton ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandleTutorial;
