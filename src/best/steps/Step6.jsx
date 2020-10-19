import React, { useState, useEffect /*, useRef */ } from 'react';
//import Cat from '../Cat';

export default function ParentRoot() {
  const mouse = useMouse();
  return <DisplayMouse mouse={mouse} />;
}

function useMouse(div) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  function handleMouseMove(evt) {
    setMouse({ x: evt.clientX, y: evt.clientY });
  }

  useEffect(() => {
    //use the div, if none then use the whole window
    const dest = (div && div.current) || window;
    dest.addEventListener('mousemove', handleMouseMove);
    return () => {
      dest.removeEventListener('mousemove', handleMouseMove);
    };
  }, [div]);

  return mouse;
}

///////////////////////////////////////////////////////

function DisplayMouse({ mouse }) {
  return (
    <h1>
      The mouse position is: ({mouse.x}, {mouse.y})
    </h1>
  );
}

//Try to add the cat!  See how easy it is!

//// use the following function to link to a div
// function ParentRoot(){
//   const ref = useRef(null);
//   const mouse = useMouse(ref);
//   return ( <div ref={ref} style={{height: "400px"}} >
//             <Display mouse={mouse} />
//            </div> );
// }

///
//
//  <h1>The position is: ({mouse.x}, {mouse.y})</h1>
//  <Cat mouse={mouse} />
//
