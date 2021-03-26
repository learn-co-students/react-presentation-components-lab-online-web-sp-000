import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={e => e.target.innerHTML = "<h1>you did it</h1>"} />
  </div>,
  document.getElementById('root')
);