import React from 'react';
import ContextHooks from './RightL3-EditData';

const greyboxStyle = {
  backgroundColor: 'grey',
  borderRadius: '5px',
  padding: '5px 20px 20px',
  marginBottom: '20px',
};

export default function GreyBoxes() {
  return (
    <>
      <div style={greyboxStyle}>
        <h3>Modify State (Context with Hooks)</h3>
        <ContextHooks />
      </div>
    </>
  );
}
