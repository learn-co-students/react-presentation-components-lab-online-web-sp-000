import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

handleClick = (e) => {
  let newColor = e.target.style.color === "red" ? "green" : "red";
  e.target.style.color = newColor;
}

ReactDOM.render(

  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.handleClick} />
  </div>,
  document.getElementById('root')
);