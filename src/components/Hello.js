import React from "react";

const Hello = () => {
  // return (
  //   <div>
  //     <h1>Hello</h1>
  //   </div>
  // );
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { id: "hello", className: "hello" },
      "Hello Tamara"
    )
  );
};
export default Hello;
