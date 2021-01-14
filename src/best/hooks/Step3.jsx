import React, { useState } from 'react';
//import Cat from '../Cat';

export default function ParentRoot() {
  return (
    <MouseProvider>
      <DisplayMouse />
    </MouseProvider>
  );
}

function MouseProvider(props) {
  const [mouseState, setMouseState] = useState({ x: 0, y: 0 });

  function handleMouseMove(evt) {
    setMouseState({ x: evt.clientX, y: evt.clientY });
  }

  return (
    <div style={{ height: '500px' }} onMouseMove={handleMouseMove}>
      {React.cloneElement(props.children, { mouse: mouseState })}
    </div>
  );
}

function DisplayMouse({ mouse }) {
  return (
    <h1>
      The mouse position is: ({mouse.x}, {mouse.y})
    </h1>
  );
}

//call cloneElements with children, now we can add the mouse props.
//Functionality is now split in two components.

//problem:
//can handle only one child.  If we must handle an array of children,
//we must modify the code to wrap each item in the array:
//
//   React.Children.map(props.children, (child) =>
//     React.cloneElement(child, { mouse: mouseState })
//   );
//
