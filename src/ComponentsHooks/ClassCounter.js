import React, { Component } from "react";

export class classCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    return (
      <div>
        <label>{this.state.counter}</label>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default classCounter;
