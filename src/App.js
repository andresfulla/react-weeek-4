import React from 'react';
import Amount from './Amount';
import './App.css';
import ConverterContext from './ConverterContext';

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
      theme: 'light',
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
      <ConverterContext.Provider value={{theme: this.state.theme}}>
        <div className={`app ${this.state.theme}`}>
          <label>
            <span>Theme</span>
            <select
              onChange={event => this.setState({theme: event.target.value})}
              value={this.state.theme}
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </label>
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
      </ConverterContext.Provider>
    );
  }
}
