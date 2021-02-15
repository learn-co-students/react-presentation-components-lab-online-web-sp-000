import React from "react";

class Component extends React.Component {

    state = {
       mood: "happy"
    }

    handleCLick = () => {
        const mood = this.state.mood
        if (mood === "happy") {
            this.setState({
                mood: "sad"
            })
        } else {
            this.setState({
                mood: "happy"
            })
        }
    }

    render() {
        return (
            <div onClick={this.handleCLick}>{this.state.mood}</div>
        );
    }

}

export default Component;