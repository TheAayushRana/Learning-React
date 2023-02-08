import React, { useRef, useEffect, useLayoutEffect } from "react";

function LayoutTutorial() {
  const inputRef = useRef(null);

  // Workds same like useEffect but it is called before the useEffect is called
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "after";
  }, []);

  return (
    <div className="text-center">
      <input type="text" name="name" value="before" ref={inputRef} />
    </div>
  );
}

export default LayoutTutorial;
