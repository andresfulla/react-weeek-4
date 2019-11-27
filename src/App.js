import React from 'react';
import Amount from './Amount';
import './App.css';

const SECOND = 1000; // milliseconds
const CRASH_DELAY = 5 * SECOND;

function exchangeRate() {
  return Math.random() * 10000;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exchangeRate: exchangeRate(),
      value: 0
    };
  }

  _onChange = value => {
    this.setState({
      exchangeRate: exchangeRate(),
      value,
    });

    clearTimeout(this._timer);

    this._timer = setTimeout(() => {
      this.setState({
        exchangeRate: 0,
      });
    }, CRASH_DELAY)
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  render() {
    return (
      <div className="App">
        <Amount
          name="Euros"
          onChange={this._onChange}
          value={this.state.value}
        />
        <Amount
          disabled
          name="$BTC"
          onChange={this._onChange}
          value={(this.state.value * this.state.exchangeRate).toFixed(4)}
        />
      </div>
    );
  }
}
