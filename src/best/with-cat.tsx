import { ComponentType } from 'react';
import { DisplayMouseProps } from './classes/MouseState';
import Cat from './Cat';

export default function withCat(Component: ComponentType<DisplayMouseProps>) {
  function WithCat(props: DisplayMouseProps) {
    return (
      <>
        <Cat {...props} mouse={props.mouse} />
        <Component {...props} />
      </>
    );
  }

  WithCat.displayName = `WithCat(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WithCat;
}
