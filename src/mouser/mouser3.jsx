import React from 'react';
//import Cat from './cat';

class Mouse extends React.Component {
  state = { x: 0, y: 0 }

  handleMouseMouve = (evt) => {
    this.setState({ x: evt.clientX, y: evt.clientY });
  }

  render() {
    return (
      <div style={{ height: "500px" }} onMouseMove={this.handleMouseMouve} >
        {this.props.children(this.state)}
      </div>
    );
  }
}

class Mouser extends React.Component {
  render() {
    return (
      <Mouse>
        {mouse => <h1>The position is: ({mouse.x}, {mouse.y})</h1>  }
      </Mouse>
    );
  }
}

export default Mouser;


//render props  (push the function in at prop that is called "render")
//function as a child (push the function in children)

      //variation one: instead of children, use a prop called "render"
      //               (hence the name)
      //variation two: do a more complex render where you push the data
      //               down to Cat also.
          //<>
          //  <h1>The position is: ({mouse.x}, {mouse.y})</h1>
          //  <Cat mouse={mouse} />
          //</>

