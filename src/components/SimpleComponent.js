import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mood: "happy"
        }
    }
    
    render() {
        return (
            <div>
                {this.state.mood}
            </div>
        )
    }
}
