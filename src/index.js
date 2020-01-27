import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const coolFunction = event => {
  console.log("I was clicked")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={coolFunction} />
  </div>,
  document.getElementById('root')
);
