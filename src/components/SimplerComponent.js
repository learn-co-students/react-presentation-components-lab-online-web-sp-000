import React from 'react';

const SimplerComponent = (props) => {
    const style = {color: "red"}

    const eventTwo = ()=>{
        console.log("2. Hello from SimplerComponent.js!")
    }

    const handleClick = () => {
        props.handleClick();
        eventTwo();
    }

    return (
        <div onClick={handleClick} style={style}>
            I am just happy!
        </div>
    )
}

export default SimplerComponent;