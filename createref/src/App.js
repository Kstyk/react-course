import React, { Component, createRef } from 'react';
import './App.css';
import Counter from "./Counter";

class App extends Component {
  state = {
    isCounterVisible: true,
  }

  textInput = createRef()
  paragraphElement = createRef()

  render() {
    console.log(this.textInput)

    const counterElement = this.state.isCounterVisible ?
      <Counter />
      : null

    return (
      <div>
        <input
          type="text"
        />
        <input
          type="number"
          ref={this.textInput}
        />
        <p
          ref={this.paragraphElement}
        >
          Hello
        </p>
        <button onClick={this.focusTextInput}>Ustaw focus na input</button>
        <button onClick={this.addChar}>Dodaj wykrzykniki</button>
        <button onClick={this.toggleVisibilityCounter}>Pokaż/Ukryj Counter</button>
        {counterElement}
      </div>
    );
  }

  focusTextInput = () => this.textInput.current.focus()
  addChar = () => this.paragraphElement.current.textContent += "!!!"

  toggleVisibilityCounter = () => this.setState(prevstate => ({
    isCounterVisible: !prevstate.isCounterVisible
  }))
}

export default App;

