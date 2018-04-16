import React, { Component } from 'react';
import Keyboard from './Keyboard'

class App extends Component {
  constructor() {
    super()
      this.state = {
        connected: false
      }
  }

  
  componentDidMount() {
    this.audioCtx = new AudioContext()
    this.gain = this.audioCtx.createGain()
    this.sine = this.audioCtx.createOscillator()
    this.gain.connect(this.audioCtx.destination)
    this.sine.start()
  }
  
  toggleSineConnect = () => {
    this.state.connected ? this.sine.disconnect(this.gain) : this.sine.connect(this.gain)
    this.setState({ connected: !this.state.connected})
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.toggleSineConnect}>Click For Sound</button>
        <Keyboard />
      </div>
    );
  }
}

export default App;
