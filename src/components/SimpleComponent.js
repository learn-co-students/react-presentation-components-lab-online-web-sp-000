// Code SimpleComponent Here
import React from 'react'

export default class SimpleComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            mood: props.mood || "happy",
        }

    }

    handleClick = () => {
       let x = this.state.mood === "happy" ?  "sad":"happy"
       this.setState({
           mood: x,
       })
    }


        render(){
            return(
                <div onClick={this.handleClick}>{this.state.mood}</div>
            )
        }
    
}