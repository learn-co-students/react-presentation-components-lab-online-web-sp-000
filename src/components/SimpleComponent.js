// Code SimpleComponent Here
import React, { Component } from "react";

// the App component should render out the GifListContainer component
class SimpleComponent extends Component {
  state = { mood: "happy" };

  handleClick = () => {
    let moodChange = this.state.mood === "happy" ? "sad" : "happy";
    this.setState({ mood: moodChange });
  };

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}
export default SimpleComponent;
