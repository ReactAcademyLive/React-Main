import React from 'react';
//import Cat from '../Cat';

export default function ParentRoot() {
  return (
    <MouseProvider>
      <DisplayMouse />
    </MouseProvider>
  );
}

class MouseProvider extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (evt) => {
    this.setState({ x: evt.clientX, y: evt.clientY });
  };

  render() {
    return (
      <div style={{ height: '500px' }} onMouseMove={this.handleMouseMove}>
        {React.cloneElement(this.props.children, { mouse: this.state })}
      </div>
    );
  }
}

function DisplayMouse({ mouse }) {
  return (
    <h1>
      The mouse position is: ({mouse.x}, {mouse.y})
    </h1>
  );
}

//call cloneElements with children, now we can add the mouse props.
//Functionality is now split in two components.

//big problem:
//can handle only one child.  If we must handle an array of children,
//we must modify the code to wrap each item in the array:
//
//   React.Children.map(this.props.children, (child) =>
//     React.cloneElement(child, { mouse: this.state })
//   );
//
