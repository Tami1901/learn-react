import React from "react";
import "./App.css";
import ClassCounter from "./ComponentsHooks/ClassCounter";
import HookCounterTwo from "./ComponentsHooks/HookCounterTwo";
import IntervalHookCounter from "./ComponentsHooks/IntervalHookCounter";

function App() {
  return (
    <div className="App">
      <IntervalHookCounter />
    </div>
  );
}

export default App;
