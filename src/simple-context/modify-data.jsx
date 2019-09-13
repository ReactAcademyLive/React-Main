import React from 'react';
import { Input } from 'reactstrap';

export default function ModifyData() {
  return (
    <>
      <Input value={null} onChange={null} placeholder='Name' className='mb-4' />
      <Input value={null} onChange={null} placeholder='Color' />
    </>
  );
}
