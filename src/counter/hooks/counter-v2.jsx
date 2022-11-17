import React, { useRef } from 'react';
import MyButton from '../common/my-button';
import MyTextbox from '../common/my-textbox';

//This version stores the counter in local storage
//each time the counter changes its value
export default function Counter({ init }) {
  const [count, setCount] = React.useState(+init || 1);
  const isFirstRender = useIsFirstRender();

  React.useEffect(() => {
    if (+window.localStorage.getItem('count')) {
      setCount(+window.localStorage.getItem('count'));
    }
  }, []);

  //Store if it's not the first render, this avoids error with Strict mode
  React.useEffect(() => {
    if (!isFirstRender) {
      window.localStorage.setItem('count', count);
    }
  }, [count, isFirstRender]);

  function increment(incr) {
    setCount(count + incr);
  }

  function change(evt) {
    if (Number.isInteger(+evt.target.value)) {
      setCount(+evt.target.value);
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
