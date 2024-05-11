import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';
import { DisplayMouseState } from '../classes/MouseState';

const MouseContext = createContext<DisplayMouseState>({ x: 0, y: 0 });

function MouseProvider({ children }: { children: ReactNode }) {
  const [mouseState, setMouseState] = useState({ x: 0, y: 0 });

  function handleMouseMove(evt: MouseEvent<HTMLDivElement>) {
    setMouseState({ x: evt.clientX, y: evt.clientY });
  }

  return (
    <MouseContext.Provider value={mouseState}>
      <div style={{ height: '500px' }} onMouseMove={handleMouseMove}>
        {children}
      </div>
    </MouseContext.Provider>
  );
}

function useMouse() {
  const mouse = useContext(MouseContext);
  return mouse;
}

// eslint-disable-next-line react-refresh/only-export-components
export { MouseContext, MouseProvider, useMouse };
