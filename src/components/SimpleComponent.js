// Code SimpleComponent Here
import React, {Component} from 'react'

class SimpleCompnent extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            mood: 'happy'
        }
    }

    //The component should implement a handleClick function that can serve as a callback to the <div>'s click
    //event. When clicked, the component's mood should toggle between happy and sad states.
    handleClick = () => {
        const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
        this.setState({
            mood: newMood
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleCompnent;