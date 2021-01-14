import React, { useState } from 'react';
//import Cat from '../Cat';

export default function ParentRoot() {
  return <DisplayMouse />;
}

function DisplayMouse() {
  const [mouseState, setMouseState] = useState({ x: 0, y: 0 });

  function handleMouseMove(evt) {
    setMouseState({ x: evt.clientX, y: evt.clientY });
  }

  return (
    <div style={{ height: '500px' }} onMouseMove={handleMouseMove}>
      <h1>
        The mouse position is: ({mouseState.x}, {mouseState.y})
      </h1>
    </div>
  );
}

//Everything in a single component.
//Hard to reuse this elsewhere (Need to copy paste some parts of the code)
