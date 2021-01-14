import React from 'react';
import Cat from './Cat';

export default function withCat(Component) {
  function WithCat(props) {
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
