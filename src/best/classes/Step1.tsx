import React, { MouseEvent } from 'react';
import { DisplayMouseState } from './MouseState';
//import Cat from '../Cat';

export default function ParentRoot() {
  return <DisplayMouse />;
}

class DisplayMouse extends React.Component<{}, DisplayMouseState> {
  state = { x: 0, y: 0 };

  handleMouseMove = (evt: MouseEvent<HTMLDivElement>) => {
    this.setState({ x: evt.clientX, y: evt.clientY });
  };

  render() {
    const { x, y } = this.state;
    return (
      <div style={{ height: '500px' }} onMouseMove={this.handleMouseMove}>
        <h1>
          The mouse position is: ({x}, {y})
        </h1>
      </div>
    );
  }
}

//Everything in a single component.
//Hard to reuse this elsewhere (Need to copy paste some parts of the code)
