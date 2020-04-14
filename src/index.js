import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function handleClick () {
  console.log("I am handling the click")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent clickHandler={handleClick} />
  </div>,
  document.getElementById('root')
);