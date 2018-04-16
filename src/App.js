import React, { Component } from 'react';
import KeyboardContainer from './containers/KeyboardContainer'


class App extends Component {
  constructor() {
    super()
      this.state = {
        audioCtx: '',
        gain: ''
      }
  }

  
  componentDidMount() {
    const audioCtx = new AudioContext()
    const gain = audioCtx.createGain()
    gain.connect(audioCtx.destination)
    this.setState({ audioCtx, gain })
  }
  
  
  render() {
    return (
      <div className="App">
        <KeyboardContainer {...this.state}/>
      </div>
    );
  }
}

export default App;
