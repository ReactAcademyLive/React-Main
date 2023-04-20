import { MutableRefObject, useEffect, useRef } from 'react';

//modifying totalRenders is an effect, that gets increased for each render
//so if it increases to two, this means that StrictMode is on.
let totalRenders: number = 0;
let isStrictMode: boolean = false;

export default function useIsStrictMode(): boolean {
  //this ref tracks if we are on the initial render or not.
  //We only do the checking while in the first render
  const initialRender: MutableRefObject<boolean> = useRef(true);

  //if initial render
  if (initialRender.current) {
    //increase total renders
    totalRenders += 1;
    //Have we rendered more than once?
    //If that's the case, then we are in strict mode
    if (totalRenders > 1) {
      isStrictMode = true;
    }
  }

  useEffect(() => {
    //disable initial render after first render.
    if (initialRender.current) {
      initialRender.current = false;
    }
  }, []);

  return isStrictMode;
}
