import React from "react";

// const SimplerComponent = props => <div onClick={props.handleClick}></div>;
const SimplerComponent = props => (
  <div onClick={props.handleClick}>{"I am just happy"}</div>
);

export default SimplerComponent;
