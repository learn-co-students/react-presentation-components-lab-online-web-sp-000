import React from 'react'

export default function SimplerComponent(props) {
    // console.log(props)
    return (
        <div onClick={props.handleClick}>
            "I am just happy"
        </div>
    )
}

