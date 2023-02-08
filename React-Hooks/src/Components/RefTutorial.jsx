import React, { useState, useRef } from "react";

function RefTutorial() {
  const [name, setName] = useState("Aayush");
  // useRef is used to access and manipulate the dom elements
  // refName = useRef(initialValue);
  const inputRef = useRef(null);

  const changeName = () => {
    inputRef.current.focus(); // focus the input element
    // inputRef.current.value = ""; // clear the input 
    // console.log(inputRef.current.value);
  };

  return (
    <div className="text-center">
      <h3>{name}</h3>
      <input type="text" ref={inputRef} />
      <button type="submit" onClick={changeName}>
        Change Name
      </button>
    </div>
  );
}

export default RefTutorial;
