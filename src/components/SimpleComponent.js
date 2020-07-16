import React from 'react'

export default class SimpleComponent extends React.Component {

    state = {
        mood: "happy"
    }

    handleClick = (props) => { 
        return (this.state.mood === "happy" ? this.setState({mood: "sad"}) : this.setState({mood: "happy"}))
    }

    render(){
        return(
            <div onClick= {this.handleClick}> {this.state.mood} </div>
        )
    }
}