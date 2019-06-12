import React from 'react';
//import Cat from '../cat';
//import withCat from '../with-cat';

function withMouse(Component) {
    return class extends React.Component {
        state = { x: 0, y: 0 }

        handleMouseMove = (evt) => {
            this.setState({ x: evt.clientX, y: evt.clientY });
        }

        render() {
            return(
            <div style={{ height: "500px" }} onMouseMove={this.handleMouseMove} >
                <Component {...this.props} mouse={this.state} />
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

export default withMouse(Mouser)

//export default withMouse(Cat);
//export default withMouse(withCat(Mouser));



//DEFINITIONS:
//Higher order Function:  
//Function, takes a fn, and returns a new function that 
//wraps the original one with added functionality 


//Higher Order Component:
//Function, takes a "child" component, 
//returns a parent component to push props down 
//to this child component
