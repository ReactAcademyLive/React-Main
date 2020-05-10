import React from 'react';
import DisplayData from './LeftL3-DisplayData';

export default function ColoredPart() {
  return (
    <div
      style={{
        backgroundColor: 'burlywood',
        height: '200px',
        borderRadius: '5px',
        padding: '5px 20px'
      }}
    >
      <DisplayData  />
    </div>
  );
}
