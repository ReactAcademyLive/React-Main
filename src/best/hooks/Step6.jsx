import React, { useState } from 'react';
//import Cat from '../Cat';

export default function ParentRoot() {
  const [mousePosition, moveHandler] = useMouse();
  return (
    <div style={{ height: '500px' }} onMouseMove={moveHandler}>
      <DisplayMouse mouse={mousePosition} />
    </div>
  );
}

function useMouse(div) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  function handleMouseMove(evt) {
    setMouse({ x: evt.clientX, y: evt.clientY });
  }
  return [mouse, handleMouseMove];
}

function DisplayMouse({ mouse, handler }) {
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
