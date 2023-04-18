/* eslint-disable no-unused-vars */
import { MouseEvent, useState } from 'react';
import { DisplayMouseState } from '../classes/MouseState';
//import Cat from '../Cat';

export default function ParentRoot() {
  const [mousePosition, moveHandler] = useMouse();
  return (
    <div style={{ height: '500px' }} onMouseMove={moveHandler}>
      <DisplayMouse mouse={mousePosition} />
    </div>
  );
}

function useMouse(): [
  DisplayMouseState,
  (evt: MouseEvent<HTMLDivElement>) => void
] {
  const [mouse, setMouse] = useState<DisplayMouseState>({ x: 0, y: 0 });

  function handleMouseMove(evt: MouseEvent<HTMLDivElement>) {
    setMouse({ x: evt.clientX, y: evt.clientY });
  }
  return [mouse, handleMouseMove];
}

function DisplayMouse({ mouse }: { mouse: DisplayMouseState }) {
  return (
    <h1>
      The mouse position is: ({mouse.x}, {mouse.y})
    </h1>
  );
}

//Note:
//1. A custom Hook must be named "useThing"
//2. Must follow the "rules of hooks"
//3. Limitation: hooks can only be used in "function components",
//   not in "class componnents".
