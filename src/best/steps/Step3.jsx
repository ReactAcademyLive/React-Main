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

//Call children with cloneElements
//We split in two components.
//Problem: ParentRoot provides a "mouse" property to child.
//What happens if I need to change the name of the prop?
