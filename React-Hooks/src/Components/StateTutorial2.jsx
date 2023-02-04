import React, { useState } from "react";

function StateTutorial2() {
  const [text, setText] = useState("This is a text");

  const changeText = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <div className="text-center mt-5">
      <input type="type something" onChange={changeText} />
      <p>{text}</p>
    </div>
  );
}

export default StateTutorial2;
