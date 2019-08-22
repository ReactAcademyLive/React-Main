import React from 'react';

 class DisplayMouse extends React.Component {
    state = { x: 0, y: 0 };

    handleMouseMove = (evt) => {
        this.setState({ x: evt.clientX, y: evt.clientY });
    };

    render() {
        return (
            <div style={{ height: "500px" }} onMouseMove={this.handleMouseMove} >
                <h1>The mouse position is: ({this.state.x}, {this.state.y})</h1>
            </div>     
        );
    }
}

export default DisplayMouse; 