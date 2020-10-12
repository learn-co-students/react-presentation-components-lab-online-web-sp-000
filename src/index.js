import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const successFn = () => {
  console.log("Success")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={successFn} />
  </div>,
  document.getElementById('root')
);