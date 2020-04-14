import React from 'react'

class SimpleComponent extends React.Component {
    state = {
        mood: "happy"
    }

    clickHandler = () => {
        this.state.mood === "happy"? this.setState({mood: "sad"}): this.setState({mood: "happy"})
    }

    render(){
        return(
            <div onClick = {this.clickHandler}>
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent; 