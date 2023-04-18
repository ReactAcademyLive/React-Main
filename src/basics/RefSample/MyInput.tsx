import { RefObject } from 'react';

interface MyInputProps {
  defaultValue: string;
  innerRef: RefObject<HTMLInputElement>;
}

function MyInput({ defaultValue, innerRef }: MyInputProps) {
  return (
    <input
      type='search'
      className='form-control'
      defaultValue={defaultValue}
      ref={innerRef}
    />
  );
}

export default MyInput;

//comment previous, uncomment next line, change innerRef to ref
//export default React.forwardRef((props, ref) => MyInput({ ...props, ref }));

//------------------------------
//by default ref is a "special" prop, handled by react that doesn't get
//pushed to the child component.
//the workaround is to use React.forwardRef, which will call the component
//with a second param called "ref".  Yay!
