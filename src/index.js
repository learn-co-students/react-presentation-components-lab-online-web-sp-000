import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

testFunction = () => {
  this.innerHTML = 'I am just sad'
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={testFunction} />
  </div>,
  document.getElementById('root')
);