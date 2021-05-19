import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function clickMethod(){
  console.log("I am clicked. Been click. Much clicked.")
}


ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={clickMethod} />
  </div>,
  document.getElementById('root')
);