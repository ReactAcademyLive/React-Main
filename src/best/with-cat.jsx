import React from 'react';
import Cat from './Cat';

export default function withCat(Component) {
  return class extends React.Component {
    state = { mouse: { x: this.props.mouse.x, y: this.props.mouse.y } };

    componentDidUpdate(prevProps) {
      const { mouse } = this.props;

      if (mouse.x !== prevProps.mouse.x || mouse.y !== prevProps.mouse.y) {
        this.setState({ mouse });
      }
    }

    render() {
      return (
        <>
          <Cat mouse={this.state.mouse} />
          <Component {...this.props} />
        </>
      );
    }
  };
}
