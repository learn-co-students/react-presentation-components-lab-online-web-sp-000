import React, {Component} from 'react'
class SimpleComponent extends Component {
  constructor(props) {
    super(props);

    // Initial state here...
    this.state = {
      mood: 'happy'
    };
  }

  handleClick = () => {
    this.setState({
      mood: 'sad'
    }
    )
    // Probably do some work to update the state
  }

  render() {
    // Return JSX that renders into HTML
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )

  }
}
export default SimpleComponent
