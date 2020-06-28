// Code SimpleComponent Here
import React from 'react';

class SimpleComponent extends React.Component {
    // Define the initial state:
    state = {
        mood: 'happy'
    }

  handleClick = () => {
      if (this.state.mood === "happy") {
          this.setState({
              mood: "sad"
          })
      }
      else {
          this.setState({
              mood: "happy"
          })
      }
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    );
  }
}

export default SimpleComponent;