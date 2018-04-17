import React from 'react';

const WaveType = props =>
    <select onChange={props.handleWaveType}>
      <option value={'sine'}>sine</option>
      <option value={'square'}>square</option>
      <option value={'sawtooth'}>sawtooth</option>
      <option value={'triangle'}>triangle</option>
    </select>


export default WaveType
