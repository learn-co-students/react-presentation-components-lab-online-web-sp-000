// import React from 'react'
//
// class SimpleComponent extends React.component   {
//
//     // constructor() {
//     //   super()
//     //   this.state = {number: ''}
//     //     }
//
//   handleClick = () => {
//     // Probably do some work to update the state
//   }
//
//   mood = () => {return 'happy'}
//
//   render() {
//     return(
//       <div></div>
//     )
//   }
// }
import React from "react";

class SimpleComponent extends React.Component {

      constructor() {
        super()
        this.state = {mood: 'happy'}
      }

      // handleClick = (event) => {this.state.mood === 'happy' ? this.setState('mood': 'happy') : this.setState('mood': 'sad')}
      handleClick = (event) => {

        if (this.state.mood !== 'happy'){
          this.setState({'mood': 'happy'})
        } else {this.setState({'mood': 'sad'})
      }
    }


  render() {
    return(
  <div onClick = {this.handleClick} >
    {this.state.mood}
  </div>
    )
  }
}
export default SimpleComponent
