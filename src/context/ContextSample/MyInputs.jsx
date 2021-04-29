import React from 'react';
import { Input } from 'reactstrap';

export default function MyInputs(ctx) {
  return (
    <>
      <Input
        value={ctx.firstName}
        name='firstName'
        placeholder='First Name'
        onChange={ctx.onChange}
        className='mb-4'
      />
      {ctx.lastName !== null && (
        <Input
          value={ctx.lastName}
          name='lastName'
          placeholder='Last Name'
          onChange={ctx.onChange}
          className='mb-4'
        />
      )}
      <Input
        value={ctx.color}
        name='color'
        placeholder='Color'
        onChange={ctx.onChange}
      />
    </>
  );
}
