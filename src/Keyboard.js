import React from 'react';
import Key from './Key';


//black keys add 46 px from white key
//white keys add 66 pm from white key
const keyDataOctave3 = [
  {pitch: 'C3', className: 'white-key', style: {left: 0}, keypad: 'A'  },
  {pitch: 'C#3', className: 'black-key', style: {left: 46}, keypad: 'W'  },
  {pitch: 'D3', className: 'white-key', style: {left: 66}, keypad: 'S'  },
  {pitch: 'D#3', className: 'black-key', style: {left: 112}, keypad: 'E'  },
  {pitch: 'E3', className: 'white-key', style: {left: 132}, keypad: 'D'  },
  {pitch: 'F3', className: 'white-key', style: {left: 196}, keypad: 'F'  },
  {pitch: 'F#3', className: 'black-key', style: {left: 242}, keypad: 'T'  },
  {pitch: 'G3', className: 'white-key', style: {left: 262}, keypad: 'G'  },
  {pitch: 'G#3', className: 'black-key', style: {left: 308}, keypad: 'Y'  },
  {pitch: 'A3', className: 'white-key', style: {left: 328}, keypad: 'H'  },
  {pitch: 'A#3', className: 'black-key', style: {left: 374}, keypad: 'U'  },
  {pitch: 'B3', className: 'white-key', style: {left: 394 }, keypad: 'J'  },
  {pitch: 'C4', className: 'white-key', style: {left: 460 }, keypad: 'K'  },  
]


const Keyboard = props => {
  const keys = keyDataOctave3.map((keyData, index) => <Key id={keyData.pitch} key={index} display={keyData.pitch} className={keyData.className} style={keyData.style} keypad={keyData.keypad} />)
  return (
    <div>
      <ul className='keyboard-container'>
        {keys}
      </ul>
    </div>
  )
}

export default Keyboard


