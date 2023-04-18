import { useState, useEffect, RefObject } from 'react';
import { DisplayMouseProps, DisplayMouseState } from './MouseState';
//import Cat from '../Cat';

export default function ParentRoot() {
  const mouse = useMouse();
  return <DisplayMouse mouse={mouse} />;
}

function useMouse(div?: RefObject<HTMLDivElement>) {
  const [mouse, setMouse] = useState<DisplayMouseState>({ x: 0, y: 0 });

  function handleMouseMove(evt: MouseEvent) {
    setMouse({ x: evt.clientX, y: evt.clientY });
  }

  useEffect(() => {
    //use the div, if none then use the whole window
    const dest = div?.current ?? window;
    dest.addEventListener(
      'mousemove',
      handleMouseMove as EventListenerOrEventListenerObject
    );
    return () => {
      dest.removeEventListener(
        'mousemove',
        handleMouseMove as EventListenerOrEventListenerObject
      );
    };
  }, [div]);

  return mouse;
}

///////////////////////////////////////////////////////

function DisplayMouse({ mouse }: DisplayMouseProps) {
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
