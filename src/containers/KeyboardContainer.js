import React from 'react';
import Keyboard from '../components/Keyboard';
import WaveType from '../components/WaveType';
import { pitchPairs } from '../constants';

class KeyboardContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      activeOsc: {},
      oscType: 'sine'
    }
  }

  handleKeyDown = (event) => {
    const key = event.key
    console.log('key: ', key)
    if (pitchPairs[key]) {
      if (!this.state.activeOsc[key]) {
        const osc = this.props.audioCtx.createOscillator()
        osc.type= this.state.oscType
        osc.frequency.value = pitchPairs[key]
        osc.connect(this.props.gain)
        osc.start()
        this.setState({...this.state, activeOsc: {...this.state.activeOsc, [key]: osc}})
      }
    }
  }

  handleKeyUp = (event) => {
    const key = event.key
    if (this.state.activeOsc[key]) {
      this.state.activeOsc[key].disconnect()
      delete this.state.activeOsc[key]
    }
  }

  handleWaveType = event => {
    const wave = event.target.value
    this.setState({...this.state, oscType: wave})
  }

  render() {
    return (
      <div onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp} tabIndex='0'>
        <WaveType handleWaveType={this.handleWaveType} />
        <Keyboard />
      </div>
    )
  }
}

export default KeyboardContainer
