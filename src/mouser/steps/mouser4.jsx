import React, {useState, useEffect, useRef} from 'react';
//import Cat from '../cat';

function useMouse(div) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  
  function handleMouseMove(evt)  {
    setPos({x: evt.clientX, y: evt.clientY});
  }

  useEffect(() => {
    //use the div, if none then use the whole window
    const dest = (div && div.current) || window;  
    dest.addEventListener('mousemove', handleMouseMove);
    return () => {
      dest.removeEventListener('mousemove', handleMouseMove);
    };
  }, [div]);

  return pos;
}

function Mouser() {
  const mouse = useMouse();
  return ( <h1>The position is: ({mouse.x}, {mouse.y})</h1> );
}

export default Mouser;

//// use the following function to link to a div
// function ComplexMouser() {
//   const ref = useRef(null);
//   const mouse = useMouse(ref);
//   return ( <div ref={ref} style={{height: "400px"}} >
//              <h1>The position is: ({mouse.x}, {mouse.y})</h1>
//            </div> );
// }


////add cat to the mix
          //<>
          //  <h1>The position is: ({mouse.x}, {mouse.y})</h1>
          //  <Cat mouse={mouse} />
          //</>