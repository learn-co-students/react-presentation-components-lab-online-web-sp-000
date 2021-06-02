import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';
handleClick = () => {
  return(
    5
  )
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={"hello"} />
  </div>,
  document.getElementById('root')
);