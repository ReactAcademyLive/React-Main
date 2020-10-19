import React from 'react';
import ModifyData from './RightL3-ModifyData';

export default function GreyBox(props) {
  return (
    <div
      style={{
        backgroundColor: 'grey',
        borderRadius: '5px',
        padding: '5px 20px 20px',
      }}
    >
      <h1>Modify State (props)</h1>
      <ModifyData
        firstName={props.firstName}
        color={props.color}
        onChange={props.onChange}
      />
      {/* <ModifyData {...props} /> */}
    </div>
  );
}
