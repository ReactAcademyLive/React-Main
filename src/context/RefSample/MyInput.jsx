import React from 'react';

export default React.forwardRef((props, ref) => {
  return (
    <input
      className='form-control'
      defaultValue={props.defaultValue}
      ref={ref}
    />
  );
});
