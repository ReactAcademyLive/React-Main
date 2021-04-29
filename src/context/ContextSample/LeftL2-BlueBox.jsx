import React from 'react';
import DisplayData from './LeftL3-DisplayData';

export default function BlueBox() {
  //console.log('This is re-rendered!');
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
