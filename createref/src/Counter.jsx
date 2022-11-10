import React, { Component, createRef } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };

  componentRef = createRef();

  render() {
    const { counter } = this.state;

    return (
      <div ref={this.componentRef}>
        <p>Wartość licznika wynosi: {counter}</p>
        <button onClick={this.asyncIncreaseCounterValue}>
          Pobierz asynchroniczne dane
        </button>
      </div>
    );
  }

  asyncIncreaseCounterValue = () =>
    setTimeout(() => {
      if (this.componentRef.current) {
        this.setState((prevState) => ({
          counter: prevState.counter + 1,
        }));
      }
    }, 3000);
}

export default Counter;
