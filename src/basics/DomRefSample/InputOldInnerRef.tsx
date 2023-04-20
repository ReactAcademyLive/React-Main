import { RefObject } from 'react';

interface InputProps {
  defaultValue: string;
  innerRef: RefObject<HTMLInputElement>;
}

export default function Input({ defaultValue, innerRef }: InputProps) {
  return (
    <input
      type='search'
      className='form-control'
      defaultValue={defaultValue}
      ref={innerRef}
    />
  );
}

// There are two "special" props, which don't get
// pushed down to child components: `ref` and `key`.
// A simple workaround is to use a prop named something else
// (like `innerRef`) to push the ref down.
// (it could be named something else)

//This is an old school workaround.
//Today, you should instead use React.forwardRef,
