import React from 'react';

export default function Amount({name}) {
  return (
      <label>
        <span>{name}</span>
        <input placeholder="0" step="0.1" type="number" />
      </label>
  );
}
