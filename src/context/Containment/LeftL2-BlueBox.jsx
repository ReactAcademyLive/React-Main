import React from 'react';

export default function BlueBox(props) {
  return (
    <div
      style={{
        backgroundColor: 'lightblue',
        height: '200px',
        borderRadius: '5px',
        padding: '5px 20px',
      }}
    >
      {props.children}
    </div>
  );
}
