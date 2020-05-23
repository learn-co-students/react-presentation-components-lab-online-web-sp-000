import React, { Component } from 'react';


export default class SimpleComponent extends Component {

  constructor() {
    super();

    this.state = {
      mood: 'happy'
    };
  }

  onClick = () => {
    this.setState({
      mood: (this.state.mood === 'happy') ? 'sad' : 'happy'
    })
  }

  render() {
    return <div onClick={this.onClick}>{this.state.mood}</div>
  }

}
