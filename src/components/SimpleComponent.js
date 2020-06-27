import React, { Component } from 'react';

export default class SimpleComponent extends Component {
    state = {
        mood: "happy"
    };

    handleClick = () => {
        this.setState((state) => {
            if (state.mood === 'happy') {
                return {mood: 'sad'}
            } else {
                return {mood: 'happy'}
            }
        })
    }

    render() {
        return <div onClick={this.handleClick} >{this.state.mood}</div>
    }
}