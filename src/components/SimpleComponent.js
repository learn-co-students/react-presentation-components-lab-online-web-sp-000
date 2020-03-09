// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            mood:"happy"
        }
    }

    handleClick = () => {
        if (this.state.mood === "happy") {
          return  this.setState({
                mood:"sad"
            })
        } 
        return this.setState({
            mood:"happy"
        })
    }
    
    render (){
        return (
            <React.Fragment>
                <div onClick = {this.handleClick}>{this.state.mood}</div>
            </React.Fragment>
        )
    }
}

export default SimpleComponent 