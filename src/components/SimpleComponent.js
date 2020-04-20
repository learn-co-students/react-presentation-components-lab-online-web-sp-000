import React, { Component } from 'react'

class SimpleComponent extends Component {
    constructor(props) {
      super(props);
   
      // Initial state here...
      this.state = {
          mood: 'happy'
      };
    }
   
    handleClick = () => {
        let newMood = ''
        if (this.state.mood === 'happy') {
            newMood = 'sad'
        } else {
            newMood = 'happy'
        }
        this.setState({
            mood: newMood
            }
          );
    }
   
    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent

