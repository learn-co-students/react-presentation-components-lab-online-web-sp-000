import React, { Component } from "react";

class SimpleComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { mood: 'happy' }
  }

  handleClick = () => {
    return (this.state.mood === 'happy')
      ? this.setState( { mood: 'sad' }) : this.setState({ mood: 'happy' })
  }

  render() {
    return (
      <div onClick={e => this.handleClick(e)}>
        {this.state.mood}
      </div>
    )
  }
}

export default SimpleComponent
