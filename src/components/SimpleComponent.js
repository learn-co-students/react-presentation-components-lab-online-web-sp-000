import React, { Component } from 'react'

class SimpleComponent extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
          mood: 'happy'
      };
    }


// The component should implement a handleClick function that can serve as a callback to the <div>'s click event. 
//When clicked, the component's mood should toggle between happy and sad states.
   
    handleClick = () => {
      this.state.mood === 'happy' ? (this.setState({mood: 'sad'})) :  (this.setState({mood: 'happy'}))
    }
   
    render() {
      return (
          // The component should simply render its current mood state to the page in a div.
          <div onClick={this.handleClick}>
              {this.state.mood}
          </div>
      )
    }
  }
export default SimpleComponent