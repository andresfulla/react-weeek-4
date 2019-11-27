import React from 'react';

export default class Amount extends React.Component {
  render() {
    return (
        <label>
          <span>{this.props.name}</span>
          <input placeholder="0" step="0.1" type="number" />
        </label>
    );
  }
}
