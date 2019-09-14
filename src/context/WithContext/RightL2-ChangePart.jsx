import React from 'react';
import ModifyDataHooks from './RightL3-a-Hooks';
import ModifyDataConsumer from './RightL3-b-Consumer';
import ModifyDataPropType from './RightL3-c-PropTypes';

export default function ChangePart() {
  return (
    <div>
      <h3>Modify State (Context with Hooks)</h3>
      <ModifyDataHooks />
      <hr></hr>

      <h3>Modify State (Context Consumer)</h3>
      <ModifyDataConsumer />
      <hr></hr>
      
      <h3>Modify State (PropTypes)</h3>
      <ModifyDataPropType />
    </div>
  );
}
