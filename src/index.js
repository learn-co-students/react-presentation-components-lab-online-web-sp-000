import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={return <p>Say hello to my little friend</p>} />
  </div>,
  document.getElementById('root')
);