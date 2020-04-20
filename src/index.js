import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

handleClick = () => {
  console.log('Happy Boi just clicked')
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={handleClick} />
  </div>,
  document.getElementById('root')
);