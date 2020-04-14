// Code SimpleComponent Here
import React from 'react'

export default class SimpleComponent extends React.Component{
    constructor() {
        super();
        this.state = {
            mood: "happy"
        }
    }

    clickHandler = event => {
        if(this.state.mood === 'happy'){
            this.setState({
                mood: 'sad'
            })
        }else{
            this.setState({
                mood: 'happy'
            })
        }
    }

    render(){
        return(
            <div onClick={this.clickHandler}>{this.state.mood}</div>
        )
    }
}