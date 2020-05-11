import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";

function App() {
  return (
    <div className="App">
      {/* <ClassClick /> */}
      <EventBind />
      {/* <Counter />
      /* <Message></Message> */}
      {/* <Greet name="Fran" heroName="Superman">
        This is children props
      </Greet>
      <Greet name="Tamara" heroName="Wonder woman">
        <button>Action</button>
      </Greet>
      <Greet name="Kandi" heroName="Batman" />
      <Welcome name="Fran" heroName="Superman" />
      <Welcome name="Tamara" heroName="Wonder woman" />
      <Welcome name="Kandi" heroName="Batman" />
      <Hello />  */}
    </div>
  );
}

export default App;
