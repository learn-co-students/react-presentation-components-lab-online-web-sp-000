import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const clickEvent = () => {
  console.log("Hello World")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={clickEvent} />
  </div>,
  document.getElementById('root')
);
