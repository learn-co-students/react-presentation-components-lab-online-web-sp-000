// Code SimpleComponent Here
import React, { Component } from 'react'

class SimpleComponent extends Component {
  constructor(props) {
    super()

    this.state = {
      mood: 'happy'
    }
  }

  handleClick = event => {
    this.state.mood === 'happy' ? this.setState({ mood: 'sad' }) : this.setState({ mood: 'happy' })
  }

  render = () => <div onClick={ event => this.handleClick(event) }>{ this.state.mood }</div>
}

export default SimpleComponent;
