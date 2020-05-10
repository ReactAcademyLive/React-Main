import React from 'react';

const MyInput = (props) => {
  return (
    <input
      type='search'
      className='form-control'
      defaultValue={props.defaultValue}
      ref={props.ref}
    />
  );
};

export default MyInput;

//comment previous, uncomment next line
//export default React.forwardRef((props, ref) => MyInput({ ...props, ref }));

//------------------------------
//by default ref is a "special" prop, handled by react that doesn't get
//pushed to the child component.
//the workaround is to use React.forwardRef, which will call the component
//with a second param called "ref".  Yay!
