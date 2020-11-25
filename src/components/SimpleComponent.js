// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
    state = {
        mood: 'happy',
    }

    handleClick = () => {
        this.state.mood === 'happy' ? this.setState({ mood: 'sad' }) : this.setState({ mood: 'happy' })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>{this.state.mood}</p>
            </div>
        )
    }
}

export default SimpleComponent;