import { ForwardRefRenderFunction, RefObject, forwardRef } from 'react';

interface InputProps {
  defaultValue: string;
}

function Input({ defaultValue }: InputProps, ref: RefObject<HTMLInputElement>) {
  return (
    <input
      type='search'
      className='form-control'
      defaultValue={defaultValue}
      ref={ref}
    />
  );
}

export default forwardRef(
  Input as ForwardRefRenderFunction<HTMLInputElement, InputProps>
);

// There are two "special" props, which don't get
// pushed down to child components: `ref` and `key`.

// A simple workaround Today is to wrap our component
// inside a ForwardRef() function, which will push the
// ref property down.
