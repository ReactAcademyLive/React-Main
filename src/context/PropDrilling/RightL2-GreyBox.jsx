import React from 'react';
import ModifyData from './RightL3-ModifyData';

export default function GreyBox({ firstName, color, onChange }) {
  return (
    <div
      style={{
        backgroundColor: 'grey',
        borderRadius: '5px',
        padding: '5px 20px 20px',
      }}
    >
      <h1>Modify State (Property Drilling)</h1>
      <ModifyData firstName={firstName} color={color} onChange={onChange} />
      {/* <ModifyData {...props} /> */}
    </div>
  );
}
