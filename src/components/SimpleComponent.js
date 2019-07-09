// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {

  state = {
    mood: 'happy'
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }

  handleClick = () => {
    const setMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({ mood: setMood });
  }
}

export default SimpleComponent
