import React from 'react';
import ModifyData from './RightL3-ModifyData';

export default function ChangePart(props) {
  return (
    <div>
      <h1>Modify State (props)</h1>
      <ModifyData {...props} />
    </div>
  );
}
