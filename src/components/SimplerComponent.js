// Code SimplerComponent Here
// import React, { Component } from 'react'

// export default class SimplerComponent extends Component {

//     render() {
//         return (
//             <div><button onClick={this.props.handleClick}>I am just {this.props.mood || 'happy'}</button></div>
//         )
//     }
// }
import React from 'react'


const SimplerComponent = (props) => <div onClick={props.handleClick}>I am just {props.mood || 'happy'}</div>

export default SimplerComponent