// Code SimplerComponent Here
import React, { Component } from 'react';

// export default class SimplerComponent extends Component {
//   render() {
//     return (
//       <div >
//         {"I am just happy"}
//       </div>
//     );
//   }
// }

const SimplerComponent = props => {

 
    return (
      <div onClick={props.handleClick}>
          { "I am just happy"}
        </div>
    )
  }



   
  export default SimplerComponent
  