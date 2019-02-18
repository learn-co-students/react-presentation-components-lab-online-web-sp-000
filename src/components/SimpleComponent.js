import React, { Component } from 'react';

class SimpleComponent extends Component {

  state={
    mood: "happy"
  }

changeMood=(e)=>{

  if (this.state.mood === "happy")
  this.setState({
    mood: "sad"
  })
  else {
    this.setState({
      mood: "happy"
    })
  }
}

  render() {
    console.log("simple", this.props)
    return (
      <div onClick={this.changeMood}>{this.state.mood}</div>
    );
  }

}

export default SimpleComponent;
