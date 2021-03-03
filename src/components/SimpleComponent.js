// Code SimpleComponent Here
import React, { Component } from 'react';
// import SimplerComponent from './SimplerComponent';

class SimpleComponent extends Component { // declared as class inst of component so it can carry state
   state = {
      mood: 'happy'
   };

   handleClick = () => {
      this.setState(prevState => ({
         mood: prevState.mood === 'happy' ?
            'sad' : 'happy'
      }));
   }
 
   render() {
      return (
         <div onClick={this.handleClick}>{this.state.mood}</div>
      )
   }
}

export default SimpleComponent;