import React, { Component } from "react";

class SimpleComponent extends React.Component {
  state = {
    mood: "happy"
  };

  handleClick = () => {
    this.state.mood === "happy"
      ? this.setState({ mood: "sad" })
      : this.setState({ mood: "happy" });
  };

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}

export default SimpleComponent;

// The component should implement a handleClick function that can serve as a callback
// to the < div > 's click event. When clicked, the component's mood should toggle
// between happy and sad states.
