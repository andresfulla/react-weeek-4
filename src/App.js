import React from 'react';
import Amount from './Amount';
import './App.css';

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
      </div>
    );
  }
}
