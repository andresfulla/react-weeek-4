import React from 'react';
import Amount from './Amount';
import ConverterContext from './ConverterContext';
import './Converter.css';

export default class Converter extends React.Component {
  static contextType = ConverterContext;

  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  _onChange = value => {
    this.setState(
      {
        value,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state.value);
        }
      },
    );
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

        {this.context.premium && (
          <span>
            <span aria-label="" role="img">
              💎
            </span>
            <span>Premium conversions</span>
          </span>
        )}
      </div>
    );
  }
}
