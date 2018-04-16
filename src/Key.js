import React from 'react';

const Key = props => {
  const label = props.className === 'white-key' ? 'white-key-label' : 'black-key-label'
  return (
    <li 
      className={props.className} 
      id={props.id} 
      style={props.style}>
      <span className={label}>{props.keypad}</span>
    </li>  
  )
  
}

export default Key