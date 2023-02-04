import React, { useReducer, useState } from "react";

function ReducerTutorial() {
  // current state and action
  const reducer = (state, action) => {
    switch (action.type) {
      case "IncrementValue":
        return {
          count: state.count + 1,
          showText: state.showText,
        };
      case "hideText":
        return {
          count: state.count,
          showText: !state.showText,
        };
      default:
        return state;
    }
  };

  // It contains state, dispatch function (used to change values of state) =
  // reducer function and initialized value
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });
  // const [count, setCount] = useState(0);
  // const [showText, setShowText] = useState(true);

  // Here in one event we are updating 2 state so in place of useState we can useReducer
  const increment = () => {
    // console.log("clicked");
    dispatch({ type: "IncrementValue" });
    dispatch({ type: "hideText" });
    // setCount(count + 1);
    // setShowText(!text);
  };
  return (
    <div className="text-center mt-5">
      <h3>ReducerTutorial</h3>
      <h5>{state.count}</h5>
      <button onClick={increment}>Increase Count</button>
      <br />
      {state.showText && "This is a text"}
    </div>
  );
}

export default ReducerTutorial;
