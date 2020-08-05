import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const alertHappiness = () => {
  alert("I'M JUST HAPPY OKAY");
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={alertHappiness} />
  </div>,
  document.getElementById('root')
);
