import React from "react";

const defaultMood = "happy";
export default class SimpleComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mood: defaultMood
    };
  }
  handleClick = () => {
    if (this.state.mood === "happy") {
      this.setState({
        mood: "sad"
      });
    } else {
      this.setState({
        mood: defaultMood
      });
    }
  };

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}
