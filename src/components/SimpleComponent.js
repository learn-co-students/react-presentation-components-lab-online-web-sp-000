// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mood: 'happy'
    }
  }

  handleMoodChange = event => {
    this.setState({
      mood: 'sad'
    })
  }

  render() {
    return (
        <div onClick={this.handleMoodChange}>
          {this.state.mood}
        </div>
    )
  }
}

export default SimpleComponent
