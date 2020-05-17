import React from "react";
import "./App.css";
import ClassCounter from "./ComponentsHooks/ClassCounter";
import HookCounterTwo from "./ComponentsHooks/HookCounterTwo";
import DataFetching from "./ComponentsHooks/DataFetching";

function App() {
  return (
    <div className="App">
      <DataFetching />
    </div>
  );
}

export default App;
