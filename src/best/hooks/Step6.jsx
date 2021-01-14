import React, { useState, useEffect /*, useRef */ } from 'react';
//import Cat from '../Cat';

export default function ParentRoot() {
  const mousePosition = useMouse();
  return <DisplayMouse mouse={mousePosition} />;
}

function useMouse(div) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  function handleMouseMove(evt) {
    setMouse({ x: evt.clientX, y: evt.clientY });
  }

  useEffect(() => {
    //use the div, if none then use the whole window
    const dest = div?.current ?? window;
    dest.addEventListener('mousemove', handleMouseMove);
    return () => {
      dest.removeEventListener('mousemove', handleMouseMove);
    };
  }, [div]);

  return mouse;
}

function DisplayMouse({ mouse }) {
  return (
    <h1>
      The mouse position is: ({mouse.x}, {mouse.y})
    </h1>
  );
}

//Note:
//1. A custom Hook must be named useThing
//2. We cannot use synthetic events in custom hooks.
//   So instead, we wire up DOM events in effects.
//3. Limitation: hooks can only be used in "function components",
//   not in "class componnents".

//// use the following function to link to a div
// function ParentRoot(){
//   const ref = useRef(null);
//   const mouse = useMouse(ref);
//   return ( <div ref={ref} style={{height: "500px"}} >
//             <DisplayMouse mouse={mouse} />
//            </div> );
// }
