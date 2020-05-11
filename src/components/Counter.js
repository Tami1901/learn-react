import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  counter() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  increment5() {
    this.counter();
    this.counter();
    this.counter();
    this.counter();
    this.counter();
  }

  render() {
    return (
      <div>
        <h2>count: {this.state.count}</h2>
        <button onClick={() => this.increment5()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
