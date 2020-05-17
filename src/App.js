import React from "react";
import "./App.css";
import ClassCounter from "./ComponentsHooks/ClassCounter";
import HookCounterTwo from "./ComponentsHooks/HookCounterTwo";
import ReduxCounterThree from "./ComponentsHooks/ReduxCounterThree";

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <ReduxCounterThree />
    </div>
  );
}

export default App;
