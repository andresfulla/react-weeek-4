import React from 'react';
import Converter from './Converter';
import './App.css';
import ConverterContext from './ConverterContext';

function exchangeRate() {
  return Math.random() * 10000;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exchangeRate: exchangeRate(),
      theme: 'light',
      value: 0,
    };
  }

  render() {
    return (
      <ConverterContext.Provider value={{theme: this.state.theme}}>
        <div className={`app ${this.state.theme}`}>
          <label>
            <span>Theme</span>
            <select
              onChange={event => this.setState({theme: event.target.value})}
              value={this.state.theme}>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </label>
          <div>
            <Converter cryptoName="$BTC" exchangeRate={0.5} />
            <Converter cryptoName="$ETH" exchangeRate={1.2} />
          </div>
        </div>
      </ConverterContext.Provider>
    );
  }
}
