import React from 'react';
import MyButton from '../common/my-button';
import MyTextbox from '../common/my-textbox';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: +props.init || 1 };
  }

  componentDidMount() {
    let count = +window.localStorage.getItem('count');
    this.setState({ count: count || this.state.count });
  }

  componentWillUnmount() {
    window.localStorage.setItem('count', this.state.count);
  }

  click = incr => {
    this.setState({ count: this.state.count + incr });
  };

  change = evt => {
    if (Number.isInteger(+evt.target.value)) {
      this.setState({ count: +evt.target.value });
    }
  };

  render() {
    const { count } = this.state;
    return (
      <>
        <h1>the count is: {count} </h1>
        <MyButton onClick={this.click} incr='1' />
        <MyButton onClick={this.click} incr='-10' />
        <MyButton onClick={this.click} incr='100' />
        <MyTextbox value={count} onChange={this.change} />
      </>
    );
  }
}
