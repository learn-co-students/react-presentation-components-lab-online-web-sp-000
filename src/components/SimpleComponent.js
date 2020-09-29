// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mood: 'happy'
        }
    }

    handleclick = () => {
        const behavior = this.state.mood === 'happy' ? 'sad' : 'happy';
        this.setState({mood: behavior})
    }

    render() {
        return (
            <div onClick={this.handleclick}>
                {this.state.mood}
            </div>
        )
    }
}
