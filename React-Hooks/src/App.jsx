import React from "react";
import StateTutorial from "./Components/StateTutorial";
import StateTutorial2 from "./Components/StateTutorial2";
import ReducerTutorial from "./Components/ReducerTutorial";
import EffectTutorial from "./Components/EffectTutorial";

function App() {
  return (
    <div>
      <h2 className="text-center">Learning React Hooks</h2>
      {/* <StateTutorial />
      <StateTutorial2 /> */}
      {/* <ReducerTutorial /> */}
      <EffectTutorial />
    </div>
  );
}

export default App;
