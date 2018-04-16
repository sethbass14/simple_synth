import React from 'react';
import Keyboard from '../Keyboard'
import { pitchPairs } from '../constants'

class KeyboardContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      activeOsc: {
        
      }
    }
  }
  
  handleKeyDown = (event) => {
    const key = event.key
    if (pitchPairs[key]) {
      if (!this.state.activeOsc[key]) {
        const osc = this.props.audioCtx.createOscillator()
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
      console.log(this.state)  
    }
  }
  
  render() {
    return (
      <div onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp} tabIndex='0'>
        <Keyboard />
      </div>
    )
  }
}

export default KeyboardContainer 