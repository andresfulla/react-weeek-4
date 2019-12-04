import React from 'react';
import Amount from './Amount';
import './Converter.css';

export default class Converter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  _onChange = value => {
    this.setState({
      value,
    });
  };

  render() {
    const {header, cryptoName, exchangeRate} = this.props;

    return (
      <div className="converter">
        {header && <div className="converter--header">{header}</div>}

        <Amount
          name="Euros"
          onChange={this._onChange}
          value={this.state.value}
        />
        <Amount
          disabled
          name={cryptoName}
          onChange={this._onChange}
          value={(this.state.value * exchangeRate).toFixed(4)}
        />
      </div>
    );
  }
}
