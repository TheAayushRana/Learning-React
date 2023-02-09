import React from "react";
import StateTutorial from "./Components/StateTutorial";
import StateTutorial2 from "./Components/StateTutorial2";
import ReducerTutorial from "./Components/ReducerTutorial";
import EffectTutorial from "./Components/EffectTutorial";
import RefTutorial from "./Components/RefTutorial";
import LayoutTutorial from "./Components/LayoutTutorial";
import ImperativeHandleTutorial from "./Components/imperativeHandleTutorial/ImperativeHandleTutorial";
import NameContext from "./Components/context/NameContext";
import MemoTutorial from "./Components/MemoTutorial";
import CallbackTutorial from "./Components/callBack/CallbackTutorial";

function App() {
  return (
    <div className="text-center">
      <h2>Learning React Hooks</h2>
      {/* <StateTutorial />
      <StateTutorial2 />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
      <LayoutTutorial /> 
      <ImperativeHandleTutorial /> 
      <NameContext />
      <MemoTutorial />*/}
      <CallbackTutorial />
    </div>
  );
}

export default App;
