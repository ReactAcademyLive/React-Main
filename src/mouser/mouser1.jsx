import React from 'react';

export default class Mouser extends React.Component{
    state = {x: 0, y: 0};

    handleMouseMouve = (evt) => {
        this.setState({x: evt.clientX, y: evt.clientY});
    };

    render(){
        const {x, y} = this.state;
        return (
            <div style={{height: "500px"}} onMouseMove={this.handleMouseMouve} >
                <h1>The mouse position is: ({x}, {y})</h1>
            </div>
        );
    }

}