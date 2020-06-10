import React, {Component} from 'react'

export default class SimpleComponent extends Component {
    constructor(props) {
      super(props);
   
      // Initial state here...
      this.state = {
          mood: "happy"
      };
    }
   
    handleClick = () => {
        const updatedMood = this.state.mood === "happy" ? "sad" : "happy"
     this.setState({
        mood: updatedMood 
     })
    }
   
    render() {
      // Return JSX that renders into HTML
      return <div onClick= {this.handleClick}>{this.state.mood}</div>;
         

      
    }
  }