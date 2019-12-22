import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={(e) => {
      let newColor = e.target.style.color === 'blue' ? 'black' : 'blue';
      e.target.style.color = newColor;
    }} />
  </div>,
  document.getElementById('root')
);
