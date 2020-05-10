import React from 'react';
import ModifyDataHooks from './RightL3-a-Hooks';
import ModifyDataConsumer from './RightL3-b-Consumer';
import ModifyDataContextType from './RightL3-c-ContextTypes';

export default function ChangePart() {
  return (
    <div>
      <h3>Modify State (Context with Hooks)</h3>
      <ModifyDataHooks />
      <hr className='mb-5'></hr>

      <h3>Modify State (Context Consumer)</h3>
      <ModifyDataConsumer />
      <hr className='mb-5'></hr>

      <h3>Modify State (Context with ContextType)</h3>
      <ModifyDataContextType />
    </div>
  );
}
