import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function alertTest() {
  window.alert("hey")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={alertTest} />
  </div>,
  document.getElementById('root')
);