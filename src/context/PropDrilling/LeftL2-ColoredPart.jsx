import React from 'react';
import DisplayData from './LeftL3-DisplayData';

export default function ColoredPart(props) {
  return (
    <div
      style={{
        backgroundColor: 'lightblue',
        height: '200px',
        borderRadius: '5px',
        padding: '5px 20px',
      }}
    >
      <DisplayData firstName={props.firstName} color={props.color} />
    </div>
  );
}
