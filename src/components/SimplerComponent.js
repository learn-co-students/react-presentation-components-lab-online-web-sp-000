// Code SimplerComponent Here
import React, { Component } from 'react'

const SimplerComponent = (props) => {
    return (
        <div onClick={ event => props.handleClick(event)}>I am just happy</div>
    )
}

export default SimplerComponent
