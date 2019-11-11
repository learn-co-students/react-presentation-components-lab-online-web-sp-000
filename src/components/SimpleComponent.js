// Code SimpleComponent Here
import React, { Component } from 'react'

class SimpleComponent extends Component {
  constructor() {
    super()
    this.state = {
      'mood': 'happy'
    }
  }

  handleClick = () => {
    this.setState({
      'mood': 'sad'
    })
  }



  render() {
    return (
      <div onClick={this.handleClick}>
        <h2>{this.state.mood}</h2>
      </div>
    )
  }
}

export default SimpleComponent
