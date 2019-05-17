import React from 'react';

function withMouse(Component) {
    return class Mouse extends React.Component {
        state = { x: 0, y: 0 };

        handleMouseMouve = (evt) => {
            this.setState({ x: evt.clientX, y: evt.clientY });
        };

        render() {
            return (
                <div style={{ height: "500px" }} onMouseMove={this.handleMouseMouve} >
                     <Component mouse={this.state} />
                </div>
            );
        }
    }
}

 class Mouser extends React.Component {
    render() {
        const { x, y } = this.props.mouse;
        return (
                <h1>The mouse position is: ({x}, {y})</h1>
        );
    }
}

export default withMouse(Mouser); 

//Higher Order Component:
//function, takes a component, returns a parent component to push extra props down!

//Higher order Function:  
//function, that return a new function with added functionality 
