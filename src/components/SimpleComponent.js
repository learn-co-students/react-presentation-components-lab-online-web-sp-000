// Code SimpleComponent Here
import React, { Component } from 'react';
class SimpleComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { mood: 'happy' }
      }

     changeMood = () => {
        const setMood = this.state.mood === 'happy' ? 'sad' : 'happy';
        this.setState({ mood: setMood });
      }

     render() {
      return <div onClick={this.changeMood}>{this.state.mood}</div>;
    }
  }

   export default SimpleComponent;
