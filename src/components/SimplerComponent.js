import React from 'react';

const handleClick = () => {
  alert('hi');
}

const SimplerComponent = (props) =>  {

    return(
      //<div onClick={handleClick.bind(null, props.x)}>
      <div onClick={handleClick}>
        "I am just happy"
      </div>
    )


}

export default SimplerComponent
