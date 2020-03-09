import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';


ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={() => {console.log("You cannot change my state!")}} />
  </div>,
  document.getElementById('root')
);