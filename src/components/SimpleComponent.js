// Code SimpleComponent Here

import React from 'react';
 
class SimpleComponent extends React.Component {


	  state = {
	    mood: 'happy'
	  }
	 

  handleClick = event => {
    this.setState( state=> ({
      mood: 'sad'

   }));
  }


 
  render() {
    return (
     
        <div onClick={this.handleClick}>{this.state.mood}</div>
         
    );
  }
}
 
export default SimpleComponent;