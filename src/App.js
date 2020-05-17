import React from "react";
import "./App.css";
import ClassCounter from "./ComponentsHooks/ClassCounter";
import HookCounterTwo from "./ComponentsHooks/HookCounterTwo";
import ComponentC from "./ComponentsHooks/ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Tamara"}>
        <ChannelContext.Provider value={"Codeevolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
