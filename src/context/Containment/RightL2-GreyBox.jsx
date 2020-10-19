import React from 'react';

export default function GreyBox(props) {
  return (
    <div
      style={{
        backgroundColor: 'grey',
        borderRadius: '5px',
        padding: '5px 20px 20px',
      }}
    >
      {props.children}
    </div>
  );
}
