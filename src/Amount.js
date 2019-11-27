import React from 'react';
import './Amount.css';
import ConverterContext from './ConverterContext';

export default class Amount extends React.Component {
  static contextType = ConverterContext;

  constructor(props) {
    super(props);

    this.state = {isNegative: false};
  }

  _onChange = event => {
    const value = parseFloat(event.currentTarget.value);

    const isNegative = Number.isNaN(value) ? false : value < 0;

    this.setState({isNegative});

    this.props.onChange(value);
  }

  render() {
    const {value} = this.props;

    return (
        <label className={`amount ${this.context.theme}`}>
          <span>{this.props.name}</span>
          <input
            className={this.state.isNegative ? 'negative' : ''}
            disabled={this.props.disabled}
            onChange={this._onChange}
            placeholder="0"
            step="0.1"
            type="number"
            value={Number.isNaN(value) ? '': value}
          />
        </label>
    );
  }
}
