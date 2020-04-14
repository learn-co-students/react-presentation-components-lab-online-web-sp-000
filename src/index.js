import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const dummyHandler = () => {
  console.log("dummy")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={dummyHandler} />
  </div>,
  document.getElementById('root')
);