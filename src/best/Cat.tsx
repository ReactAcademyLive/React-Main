import { DisplayMouseProps } from './classes/MouseState';

export default function Cat({ mouse }: DisplayMouseProps) {
  return (
    <img
      src='/old_public/cat.jpg'
      alt='cat'
      style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
    />
  );
}
