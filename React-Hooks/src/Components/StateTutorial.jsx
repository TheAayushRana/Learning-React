import React, { useState } from "react";

function StateTutorial() {
  // Whenever a state is changed then that component gets re-render
  // initial state, function to update that state = initial state value
  const [count, setCount] = useState(0);

  // function to increase count
  const incrementCount = () => {
    // console.log("clicked");
    setCount(count + 1);
  };

  return (
    <div className="text-center fs-4 mt-5">
      <h3>{count}</h3>
      <button onClick={incrementCount}>Click Me</button>
    </div>
  );
}

export default StateTutorial;
