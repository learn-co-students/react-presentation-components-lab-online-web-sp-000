// Code SimpleComponent Here
import React, { Component } from "react";

class SimpleComponent extends Component {
  constructor() {
    super();

    this.state = {
      mood: "happy",
    };
  }

  handleClick = (event) => {
    this.setState({ mood: this.state.mood === "happy" ? "sad" : "happy" });
  };
  render() {
    return (
      <div onClick={this.handleClick}>
        <p>{this.state.mood}</p>
      </div>
    );
  }
}

export default SimpleComponent;
