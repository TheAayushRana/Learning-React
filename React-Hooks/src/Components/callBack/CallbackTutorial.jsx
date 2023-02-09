import React, { useCallback, useState } from "react";
import ChildCallback from "./ChildCallback";

function CallbackTutorial() {
  // useCallback hook is used to memoize a function so that it only gets re-created
  //  when one of its dependencies changes
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Hi function from Parent");

  // whenever a state is changing suppose toggle is changing whole component get re-render
  // In render this function is always re-created again even data is not changing.
  // So we useCallback hook here
  const returnData = useCallback(() => {
    console.log("called from parent");
    return data;
  }, [data]);

  return (
    <div>
      <ChildCallback returnData={returnData} />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <p>Toggle</p>}
    </div>
  );
}

export default CallbackTutorial;
