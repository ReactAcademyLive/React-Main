import React from 'react';
import DisplayData from './LeftL3-DisplayData';

export default function BlueBox() {
  return (
    <div
      style={{
        backgroundColor: 'lightblue',
        height: '200px',
        borderRadius: '5px',
        padding: '5px 20px',
      }}
    >
      <DisplayData />
    </div>
  );
}
