import React from 'react';
//import Cat from '../Cat';

export default function ParentRoot() {
  return <MouseProvider />;
}

class MouseProvider extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (evt) => {
    this.setState({ x: evt.clientX, y: evt.clientY });
  };

  render() {
    return (
      <div style={{ height: '500px' }} onMouseMove={this.handleMouseMove}>
        <DisplayMouse mouse={this.state} />
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

//We split in two components.
//Problem: parent needs to know the name of the child component
//What happens if the parent is a separate library and
//can't predict the name of the child component?
