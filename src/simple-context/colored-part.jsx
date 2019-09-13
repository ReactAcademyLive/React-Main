import React from 'react';
import DisplayData from './display-data';

export default function ColoredPart(props) {
  return (
    <div
      style={{
        backgroundColor: 'burlywood',
        height: '200px',
        borderRadius: '5px',
        padding: '5px 20px'
      }}
    >
      <DisplayData name={props.name} color={props.color} />
    </div>
  );
}
