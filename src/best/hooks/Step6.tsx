import { useState, useEffect, RefObject } from 'react';
import { DisplayMouseProps, DisplayMouseState } from '../classes/MouseState';
//import Cat from '../Cat';

export default function ParentRoot() {
  const mouse = useMouse();
  return <DisplayMouse mouse={mouse} />;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function useMouse(div?: RefObject<HTMLDivElement>) {
  const [mouse, setMouse] = useState<DisplayMouseState>({ x: 0, y: 0 });

  function handleMouseMove(evt: MouseEvent) {
    setMouse({ x: evt.clientX, y: evt.clientY });
  }

  useEffect(() => {
    window.addEventListener(
      'mousemove',
      handleMouseMove as EventListenerOrEventListenerObject,
    );
    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove as EventListenerOrEventListenerObject,
      );
    };
  }, []);

  return mouse;
}

function DisplayMouse({ mouse }: DisplayMouseProps) {
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
