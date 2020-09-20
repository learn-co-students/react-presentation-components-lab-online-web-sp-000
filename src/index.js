import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <br></br>
    <SimplerComponent handleClick={() => console.log("I am happy")} />
  </div>,
  document.getElementById('root')
);
