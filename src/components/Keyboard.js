import React from 'react';
import Key from './Key';
import { keyDataOctave4 } from '../constants';

const Keyboard = props => {
  const keys = keyDataOctave4.map((keyData, index) => <Key id={keyData.pitch} key={index} display={keyData.pitch} className={keyData.className} style={keyData.style} keypad={keyData.keypad} />)
  return (
    <div>
      <ul className='keyboard-container'>
        {keys}
      </ul>
    </div>
  )
}

export default Keyboard
