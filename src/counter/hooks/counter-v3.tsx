import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import MyButton from '../common/my-button';
import MyTextbox from '../common/my-textbox';

interface CounterProps {
  init: number;
}

export default function Counter({ init }: CounterProps) {
  const [count, setCount] = useLocalStorage<number | null>(+init || 1, 'count');

  //event handler when a button is clicked
  function increment(incr: number) {
    setCount((count ?? 0) + incr);
  }

  //event handler when we type in the textbox
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
      <h1>The count is: {count} </h1>
      <MyButton onIncrement={increment} value={1} />
      <MyButton onIncrement={increment} value={-10} />
      <MyButton onIncrement={increment} value={100} />
      <MyTextbox value={count} onChange={change} />
    </>
  );
}

//hook to save and load data in local storage
function useLocalStorage<T>(
  initial: T,
  name: string,
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(initial);
  const isFirstRender = useIsFirstRender();

  useEffect(() => {
    const storedState = window.localStorage.getItem(name);
    if (storedState) {
      setState(JSON.parse(storedState) as T);
    }
  }, [name]);

  useEffect(() => {
    if (!isFirstRender) {
      window.localStorage.setItem(name, JSON.stringify(state));
    }
  }, [state, name, isFirstRender]);

  return [state, setState];
}

//This custom hook returns true when it is the first render, false otherwise
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
