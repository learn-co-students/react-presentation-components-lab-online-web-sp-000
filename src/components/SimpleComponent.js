import React, { Component } from 'react';

export default class SimpleComponent extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      mood: "happy"
    }
  }

  handleClick = () => {
    if (this.state.mood === "happy") {
      this.setState({
        mood: "sad"
      })
    } else if (this.state.mood === "sad") {
      this.setState({
        mood: "happy"
      })
    }
  }

  render() {
    return(
      <div onClick={this.handleClick}>
        <p>{this.state.mood}</p>
      </div>
    )
  }

}