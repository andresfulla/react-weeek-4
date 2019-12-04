import React from 'react';
import Converter from './Converter';
import './App.css';
import ConverterContext from './ConverterContext';

function exchangeRate() {
  return Math.random() * 10000;
}

const MAX_CONVERSIONS = 5;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exchangeRate: exchangeRate(),
      theme: 'light',
      value: 0,
      conversions: 0,
      premium: false,
    };
  }

  _onConversion = () => {
    this.setState(prevState => {
      return {
        conversions: prevState.conversions + 1,
      };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const {conversions, premium} = this.state;

    if (!premium && conversions > MAX_CONVERSIONS) {
      alert('Convert without limits with out Premium Package');
      this.setState({conversions: 0});
    }
  }

  render() {
    return (
      <ConverterContext.Provider
        value={{theme: this.state.theme, premium: this.state.premium}}>
        <div className={`app ${this.state.theme}`}>
          <div className="app--header">
            <label>
              <span>Theme</span>
              <select
                onChange={event => this.setState({theme: event.target.value})}
                value={this.state.theme}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
            </label>
            {!this.state.premium ? (
              <button
                onClick={() => this.setState({premium: true})}
                type="button">
                Become Premium
              </button>
            ) : (
              <span>You are premium</span>
            )}
          </div>
          <div>
            <Converter
              header={<h1>Bitcoin to Euro</h1>}
              cryptoName="$BTC"
              exchangeRate={0.5}
              onChange={this._onConversion}
            />
            <Converter
              header={<h1>Etherium converter</h1>}
              cryptoName="$ETH"
              exchangeRate={1.2}
              onChange={this._onConversion}
            />
          </div>
        </div>
      </ConverterContext.Provider>
    );
  }
}
