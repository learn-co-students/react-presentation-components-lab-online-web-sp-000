// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
  constructor(props) {
    super(props);

    // Initial state here...
    this.state = {
      mood: 'happy'
    };
  }

  handleClick = () => {
    this.state.mood === 'happy' ? this.setState({mood: 'sad'}) : this.setState({mood: 'happy'});
    // Probably do some work to update the state
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>
  }
}

export default SimpleComponent