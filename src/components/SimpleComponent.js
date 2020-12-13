import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mood: "happy"
        }
    }

    handleClick = () => {
        this.setState({
            mood: "happy" ? "sad" : "happy"
        })
    }
    
    render() {
        console.log(this.state)
        return (
            <div onClick={this.handleClick} >
                {this.state.mood}
            </div>
        )
    }
}
