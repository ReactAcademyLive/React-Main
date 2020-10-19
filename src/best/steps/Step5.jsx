import React from 'react';
//import Cat from '../Cat';

export default function ParentRoot() {
  return (
    <MouseProvider>{(mouse) => <DisplayMouse mouse={mouse} />}</MouseProvider>
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
        {this.props.children(this.state)}
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

//render props: push a function into a prop that is called "render"
//function as a child:  push the same function in children

//variation one: instead of children, use a prop called "render"
//               (hence the name)
//variation two: do a more complex render where you push the data
//               down to Cat also.
//<>
//  <h1>The position is: ({mouse.x}, {mouse.y})</h1>
//  <Cat mouse={mouse} />
//</>
