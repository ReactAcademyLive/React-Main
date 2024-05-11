import { DisplayMouseProps } from '../classes/MouseState';
import { MouseProvider, useMouse } from './MouseProvider';
import Cat from '../Cat';

export default function ParentRoot() {
  return (
    <MouseProvider>
      <DisplayPosition />
    </MouseProvider>
  );
}

function DisplayPosition() {
  const mouse = useMouse();
  return (
    <>
      <DisplayMouse mouse={mouse} />
      <Cat mouse={mouse} />{' '}
    </>
  );
}

function DisplayMouse({ mouse }: DisplayMouseProps) {
  return (
    <h1>
      The mouse position is: ({mouse.x}, {mouse.y})
    </h1>
  );
}

//Note:
//Pattern of ProviderContext and Hook Consumer
