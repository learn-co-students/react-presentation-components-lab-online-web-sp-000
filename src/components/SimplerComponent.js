import React from 'react'

const SimplerComponent = props => (
  <div onClick={e => props.handleClick(e)} style={{color: 'black'}}>I am just happy</div>
)

export default SimplerComponent
