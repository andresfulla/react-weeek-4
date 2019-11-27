import React from 'react';
import Amount from './Amount';
import './App.css';

function exchangeRate() {
  return Math.random() * 10000;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: 0};
  }

  _onChange = value => {
    this.setState({value});
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
          value={(this.state.value * exchangeRate()).toFixed(4)}
        />
      </div>
    );
  }
}
