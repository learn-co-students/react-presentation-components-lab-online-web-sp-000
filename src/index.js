import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const changeColor = (event) => {
  event.target.style = 'color: #fff'
  console.log(event.target.style)
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={event => changeColor(event)} />
  </div>,
  document.getElementById('root')
);