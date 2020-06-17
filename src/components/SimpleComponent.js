import React from 'react'

class SimpleComponent extends React.Component{

    constructor(){
        super()
        this.state = {
            mood : 'happy'
        }
    }

    handleClick(){
        let newMood;
        if(this.state.mood === 'happy'){
            newMood = 'sad'
        } else {
            newMood = 'happy'      
        }
        this.setState({
            mood : newMood
        })
    }

    render(){
        return(
        <div onClick={this.handleClick.bind(this)}>{this.state.mood}</div>
        )
    }
}

export default SimpleComponent
