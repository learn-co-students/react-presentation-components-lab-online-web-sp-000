// Code SimplerComponent Here
import React from 'react'

const SimplerComponent = (props) => {
    // console.log("props:", props)
    return (
        <div onClick={props.handleClick}>"I am just happy"</div>
    )
}

export default SimplerComponent