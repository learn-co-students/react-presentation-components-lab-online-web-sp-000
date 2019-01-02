import React from "react";

const SimplerComponent = ({ handleClick }) => (
  <div onClick={handleClick}>"I am just happy"</div>
);

export default SimplerComponent;

// The component should be a "stateless functional" component.

// It should render a < div > to the page that contains the text: "I am just happy".

// It should receive one property called handleClick that performs some sort of action
// in response to a click — your choice!
