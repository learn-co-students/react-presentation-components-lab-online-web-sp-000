// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component{
    constructor(){
        super()
        this.state={
            mood: "happy"
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.mood === nextState.mood) {
          return false
        }
        return true
      }
      

    handleClick = () => {
        let msg = ""
        if (this.state.mood == "happy"){
            msg = "sad"
        }
        else{
            msg = "happy"
        }
        console.log("here!")
        console.log(msg)
        console.log(this.state.mood)
        this.setState({ mood: msg })
    }

    render(){
        return(
            <div onClick= {this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}