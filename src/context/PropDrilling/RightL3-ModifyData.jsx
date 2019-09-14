import React from 'react';
import { Input } from 'reactstrap';

export default function ModifyData(props) {
  return (
    <>
      <Input
        value={props.name}
        name='name'
        placeholder='Name'
        onChange={props.onChange}
        className='mb-4'
      />
      <Input
        value={props.color}
        name='color'
        placeholder='Color'
        onChange={props.onChange}
      />
    </>
  );
}
