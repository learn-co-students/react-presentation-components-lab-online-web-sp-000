// Code SimplerComponent Here
//"stateless functional" component

import React from 'react';

const SimplerComponent = (props) => {
    return(
        <div onClick={props.handleClick}>
            "I am just happy"
        </div>
    );

};

export default SimplerComponent;