import React, { Component } from 'react';
import SwitchButton from './SwitchButton';
import './App.css';

class App extends Component {
  state = { 
    time: 0,
    active: false
  } 

  handleClick() {
    if(this.state.active) {
      clearInterval(this.idInterval)
    } else {
      this.idInterval = setInterval(() => this.addSecond(), 1000)
    }

    this.setState({
        active: !this.state.active
    })
  }

  addSecond = () => {
    this.setState({
      time: this.state.time + 1
    })
  }

  render() { 
    return (
      <>
        <p>{this.state.time}</p>
        <SwitchButton click={this.handleClick.bind(this)} active={this.state.active}/>
      </>
    );
  }
}
 
export default App;

