import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleIncrease = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrease = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  handleReset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <h2>{this.state.counter}</h2>
        <div>
          <button onClick={this.handleIncrease}>Increase</button>
          <button onClick={this.handleDecrease}>Decrease</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
