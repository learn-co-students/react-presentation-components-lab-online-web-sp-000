// Code SimpleComponent Here
import React, {Component} from 'react';
export default class SimpleComponent extends Component {

    constructor(props){
        super();
        this.state = {
            mood: 'happy'
        };
    }
    handleClick = () => {
        if(this.state.mood =="happy"){
        this.setState({
            mood: 'sad'
            })
        }
    }
    

render(){
    return(
        <div onClick={this.handleClick}>{this.state.mood}</div>
    )
}
}