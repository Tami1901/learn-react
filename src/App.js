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
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import "./components/appStyles.css";
import styles from "./components/appStyles.module.css";

function App() {
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <StyleSheet primary={true} />
      <Inline />
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
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
