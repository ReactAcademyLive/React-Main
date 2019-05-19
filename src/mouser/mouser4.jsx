import React, {useState, useEffect} from 'react';
//import Cat from './cat';

function useMouse() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  
  const handleMouseMouve = (evt) => {
    setPos({x: evt.clientX, y: evt.clientY});
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMouve);
    return () => {
      window.removeEventListener('mousemove', handleMouseMouve);
    };
  }, []);

  return pos;
}

function Mouser() {
  const mouse = useMouse();
  return ( <h1>The position is: ({mouse.x}, {mouse.y})</h1> );
}

export default Mouser;

          //<>
          //  <h1>The position is: ({mouse.x}, {mouse.y})</h1>
          //  <Cat mouse={mouse} />
          //</>