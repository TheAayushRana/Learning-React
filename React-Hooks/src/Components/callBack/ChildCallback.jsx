import React, { useEffect } from "react";

function ChildCallback({ returnData }) {
  // Now whenever returnData is returning different data useEffect will be called
  useEffect(() => {
    console.log("called from child");
  }, [returnData]);

  return <div>{returnData()}</div>;
}

export default ChildCallback;
