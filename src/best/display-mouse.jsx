import React from 'react';
// import Cat from './cat';

function DisplayMouse() {
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

  function handleMouseMove(evt) {
    setMouse({ x: evt.clientX, y: evt.clientY });
  }

  return (
    <div style={{ height: '500px' }} onMouseMove={handleMouseMove}>
      <h1>
        The mouse position is: ({mouse.x}, {mouse.y})
      </h1>
      {/* <Cat mouse={mouse} /> */}
    </div>
  );
}

export default DisplayMouse;
