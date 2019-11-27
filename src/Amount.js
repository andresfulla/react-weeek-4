import React from 'react';
import './Amount.css';

export default class Amount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isNegative: false};
  }

  _onChange = event => {
    const isNegative = parseFloat(event.currentTarget.value) < 0;

    this.setState({isNegative});
  }

  render() {
    return (
        <label className="amount">
          <span>{this.props.name}</span>
          <input
            className={this.state.isNegative ? 'negative' : ''}
            onChange={this._onChange}
            placeholder="0"
            step="0.1"
            type="number"
          />
        </label>
    );
  }
}
