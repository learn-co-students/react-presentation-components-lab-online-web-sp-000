// Code SimpleComponent Here
import React from 'react'

export default class SimpleComponent extends React.PureComponent {
  handleClick = () => {
    (this.state.mood === 'happy') ? this.setState({mood: 'sad'}) : this.setState({mood: 'happy'})
  }
  constructor() {
    super()
    this.state = {
      mood: 'happy'
    }
  }
  render(){
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
