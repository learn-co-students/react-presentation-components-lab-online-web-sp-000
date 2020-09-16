// Code SimpleComponent Here
import React from 'react';


export default class SimpleComponent extends React.Component {
    state = { mood: "happy" };
    
    handleClick = event => {
        let value = null;
        console.log(this.state.mood);
        if (this.state.mood === "happy" ) {value = "sad"};
        if (this.state.mood === "sad" ) {value = "happy"};
        this.setState({mood: value});
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}