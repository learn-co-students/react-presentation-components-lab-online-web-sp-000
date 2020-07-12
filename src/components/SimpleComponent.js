import React from 'react'


export default class SimpleComponent extends React.Component {
    state = {
        mood: 'happy'
    }


    render(){
        return(
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }

    handleClick = () => {
    
        let mood = this.state.mood 

        if (mood === 'happy'){
            mood = 'sad'
        }
        else if (mood === 'sad'){
            mood = 'happy'
        }

        this.setState({
            mood: mood 
        })
    }
}