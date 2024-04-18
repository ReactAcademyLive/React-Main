import { ForwardRefRenderFunction, RefObject, forwardRef } from 'react';

interface InputProps {
  defaultValue: string;
}

function Input2(
  { defaultValue }: InputProps,
  ref: RefObject<HTMLInputElement>,
) {
  return (
    <input
      type='search'
      className='form-control'
      defaultValue={defaultValue}
      ref={ref}
    />
  );
}

const Input = forwardRef(
  Input2 as ForwardRefRenderFunction<HTMLInputElement, InputProps>,
);

export default Input;

// There are two "special" props, which don't get
// pushed down to child components: `ref` and `key`.

// A simple workaround Today is to wrap our component
// inside a ForwardRef() function, which will push the
// ref property down.
