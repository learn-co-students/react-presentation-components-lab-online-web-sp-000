// Code SimpleComponent Here

import React, { Component } from 'react';

export default class SimpleComponent extends Component {

    state = {
        mood: 'happy'
      }
      handleState=(e)=>{
          this.setState({mood: "sad"})
      }
    
  render() {
    return (
      <div onClick={this.handleState}>
        {this.state.mood}
      </div>
    );
  }
}

