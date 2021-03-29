// Code SimpleComponent Here
import React, { Component } from 'react'

class SimpleComponent extends Component {
    state = {
        mood: "happy"
    }

    changeMood = () => {
        const mood = this.state.mood === "happy" ? "sad" : "happy";
        this.setState({ mood: mood })
    }


    render() {
        return (
            <div onClick={this.changeMood}>{this.state.mood}</div>
        )
    }
}

export default SimpleComponent;