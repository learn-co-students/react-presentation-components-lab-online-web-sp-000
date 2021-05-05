import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function defineded () {

document.body.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 250) + ", "+ Math.floor(Math.random() * 250) + ", " + Math.floor(Math.random() * 250) + ")";

}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={defineded} /> 
  </div>,
  document.getElementById('root')
);