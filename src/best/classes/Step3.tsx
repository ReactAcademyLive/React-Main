import { Component, MouseEvent, ReactElement } from 'react';
import { DisplayMouseState, MouseProviderProps } from './MouseState';
//import Cat from '../Cat';

export default function ParentRoot() {
  return (
    <MouseProvider>
      <DisplayMouse />
    </MouseProvider>
  );
}

class MouseProvider extends Component<MouseProviderProps, DisplayMouseState> {
  state = { x: 0, y: 0 };

  handleMouseMove = (evt: MouseEvent<HTMLDivElement>) => {
    this.setState({ x: evt.clientX, y: evt.clientY });
  };

  render() {
    const child = this.props.children as ReactElement;
    const ChildElement = child.type;
    const childProps = child.props;

    return (
      <div style={{ height: '500px' }} onMouseMove={this.handleMouseMove}>
        <ChildElement {...childProps} mouse={this.state}></ChildElement>
      </div>
    );
  }
}

function DisplayMouse({ mouse }: { mouse?: { x: number; y: number } }) {
  const mousePos = mouse!;
  return (
    <h1>
      The mouse position is: ({mousePos.x}, {mousePos.y})
    </h1>
  );
}

//call cloneElements with children, now we can add the mouse props.
//Functionality is now split in two components.

//Problem: doesn't keep key and ref. You could use the following:
//
//{cloneElement(this.props.children as ReactElement, {
//     mouse: this.state,
// })}
//
//
//New Problem: can handle only one child.  If we must handle an
//array of children, we must modify the code to wrap each
//item in the array:
//
//   React.Children.map(this.props.children, (child) =>
//     React.cloneElement(child, { mouse: this.state })
//   );
//
