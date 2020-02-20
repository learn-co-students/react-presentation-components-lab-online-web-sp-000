import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';



const makeMad= (event) => {
  console.log('I might be mad now?')
}



ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={makeMad} />
  </div>,
  document.getElementById('root')
);