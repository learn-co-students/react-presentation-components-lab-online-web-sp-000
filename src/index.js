import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const changeTextColor = (e) => {
  e.target.style = 'color: #fff'
  console.log(e.target.style)
}

ReactDOM.render(
  
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={e => changeTextColor(e)} />
  </div>,
  document.getElementById('root')
);