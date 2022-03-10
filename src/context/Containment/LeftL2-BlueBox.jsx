import React from 'react';

export default function BlueBox({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'lightblue',
        height: '200px',
        borderRadius: '5px',
        padding: '5px 20px',
      }}
    >
      {children}
    </div>
  );
}
