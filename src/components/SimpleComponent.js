// Code SimpleComponent Here
import React, {Component}from 'react';

 
class App extends Component {
    constructor(){
        super()
        this.state = {
            mood: "happy"
        }
    }

    handleClick = ()=>{
    let mood = (this.state.mood ==="happy" ? "sad" : "happy")
    this.setState(
        {mood: mood}
    )     
    }
    


    render() {
      return <div onClick = {this.handleClick}>{this.state.mood}</div>
    }
  }
   
export default App
