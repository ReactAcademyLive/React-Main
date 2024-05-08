import { Component, ComponentType, MouseEvent } from 'react';
import { DisplayMouseProps, DisplayMouseState } from './MouseState';
//import Cat from '../Cat';
//import withCat from '../with-cat';

const ParentRoot = withMouse(DisplayMouse);
export default ParentRoot;

//This is a HOC, a higher-order component.
function withMouse(WrappedComponent: ComponentType<DisplayMouseProps>) {
  class WithMouse extends Component<object, DisplayMouseState> {
    state = { x: 0, y: 0 };

    handleMouseMove = (evt: MouseEvent<HTMLDivElement>) => {
      this.setState({ x: evt.clientX, y: evt.clientY });
    };

    public static displayName = `WithMouse(${getDisplayName(
      WrappedComponent,
    )})`;

    render() {
      return (
        <div style={{ height: '500px' }} onMouseMove={this.handleMouseMove}>
          <WrappedComponent {...this.props} mouse={this.state} />
        </div>
      );
    }
  }

  return WithMouse;
}

//convention to help with HOC debugging
function getDisplayName<T>(WrappedComponent: ComponentType<T>) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

//regular component
function DisplayMouse({ mouse }: DisplayMouseProps) {
  return (
    <h1>
      The mouse position is: ({mouse.x}, {mouse.y})
    </h1>
  );
}

//export default withMouse(Cat);
//export default withMouse(withCat(DisplayMouse));

//DEFINITIONS:
//Higher order Function:
//Function, takes a fn, and returns a new function that
//wraps the original one with added functionality

//Higher Order Component:
//Function, takes a "child" component,
//returns a parent component to push props down
//to this child component
