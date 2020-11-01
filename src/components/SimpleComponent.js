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
        if (this.state.mood === 'sad') {
            this.setState({
                    mood: 'happy'
                })
        }
        else {
            this.setState({
                mood: 'sad'
            })            
        }
    }
   
    render() {
        return (
            <div onClick={event => this.handleClick()}>
              {this.state.mood}
            </div>
          )
    }
  }

  export default SimpleComponent; 