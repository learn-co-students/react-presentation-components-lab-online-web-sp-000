// Code SimplerComponent Here

import React from 'react';

const SimplerComponent = props => {


    return (
    <div onClick={() => {console.log("hello");}}>I am just happy{props.handleClick}</div>
    )
}


export default SimplerComponent


