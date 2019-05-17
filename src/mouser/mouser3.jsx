import React from 'react';
import Cat from './cat';


class Mouse extends React.Component {
  state = { x: 0, y: 0 }

  handleMouseMouve = (evt) => {
    this.setState({ x: evt.clientX, y: evt.clientY });
  }

  render() {
    return (
      <div style={{ height: "500px" }} onMouseMove={this.handleMouseMouve} >
        {this.props.render(this.state)}
      </div>
    );
  }
}


class Mouser extends React.Component {
  render() {
    return (
      <Mouse render={
        mouse => <>
          <h1>The position is: ({mouse.x}, {mouse.y})</h1>
          <Cat mouse={mouse} />
        </>
      }
      />
    );
  }
}

export default Mouser;

      //variation one: instead of children, use a prop called "render"
      //               (hence the name)
      //variation two: do a more complex render where you push the data
      //               down to Cat also.
//<>
//  <h1>The position is: ({mouse.x}, {mouse.y})</h1>
//  <Cat mouse={mouse} />
//</>

