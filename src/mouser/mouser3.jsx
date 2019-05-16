import React from 'react';
//import withCat from './withCat';


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
                {mouse => <h1>The mouse position is: ({mouse.x}, {mouse.y})</h1>}
            </Mouse>
        );
    }
}

export default Mouser;

