import React, { forwardRef, useState, useImperativeHandle } from "react";

// to use reference from parent to child we need to use forwardRef to access ref
const ChildButton = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(true);

  // It allows us to define function based on the ref- (ref, function that returns objects)
  useImperativeHandle(ref, () => ({
    // Here - functions we want to create or access from the parent
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <div className="pt-3">
      <button>Button From Child</button>
      {toggle && <p>Toggle this</p>}
    </div>
  );
});

export default ChildButton;
