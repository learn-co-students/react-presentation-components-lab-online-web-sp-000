import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent.js';
import SimplerComponent from './components/SimplerComponent.js';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={undefined} />
  </div>,
  document.getElementById('root')
);
