import React, { ChangeEvent, useRef } from 'react';
import MyButton from '../common/my-button';
import MyTextbox from '../common/my-textbox';

interface CounterProps {
  init: number;
}

//This version stores the counter in local storage
//each time the counter changes its value
export default function Counter({ init }: CounterProps) {
  const [count, setCount] = React.useState<number | null>(+init || 1);
  const isFirstRender = useIsFirstRender();

  React.useEffect(() => {
    if (window.localStorage.getItem('count')!) {
      setCount(JSON.parse(window.localStorage.getItem('count') ?? ''));
    }
  }, []);

  React.useEffect(() => {
    !isFirstRender &&
      window.localStorage.setItem('count', JSON.stringify(count));
  }, [count, isFirstRender]);

  function increment(incr: number) {
    setCount((count ?? 0) + incr);
  }

  function change(evt: ChangeEvent<HTMLInputElement>) {
    if (Number.isInteger(+evt.target.value)) {
      setCount(+evt.target.value);
    }
    if (['', '-'].includes(evt.target.value)) {
      setCount(null);
    }
  }

  return (
    <>
      <h1>The count is: {count}</h1>
      <MyButton onIncrement={increment} value={1} />
      <MyButton onIncrement={increment} value={-10} />
      <MyButton onIncrement={increment} value={100} />
      <MyTextbox value={count} onChange={change} />
    </>
  );
}

function useIsFirstRender() {
  const render = useRef(0);
  if (render.current === 0) {
    render.current = 1;
    return true;
  } else {
    render.current++;
    return false;
  }
}
