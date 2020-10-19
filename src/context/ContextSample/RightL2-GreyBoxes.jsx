import React from 'react';
import ModifyDataHooks from './RightL3-a-Hooks';
import ModifyDataConsumer from './RightL3-b-Consumer';
import ModifyDataContextType from './RightL3-c-ContextTypes';

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
        <ModifyDataHooks />
      </div>
      <div style={greyboxStyle}>
        <h3>Modify State (Context Consumer)</h3>
        <ModifyDataConsumer />
      </div>
      <div style={greyboxStyle}>
        <h3>Modify State (Context with ContextType)</h3>
        <ModifyDataContextType />
      </div>
    </>
  );
}
