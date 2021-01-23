import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';




// handleClick = () => {
//   this.setState({
//     mood: 'angry'
//   })
// }

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent onClick={this.handleClick} />
  </div>,
  document.getElementById('root')
);