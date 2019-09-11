// Code SimplerComponent Here

import React from 'react';

const simpleComponent = (props) => {
    return (
        <div onClick={props.handleClick}> I am just happy</div>
    );
}

export default simpleComponent