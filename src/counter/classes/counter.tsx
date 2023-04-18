import React, { ChangeEvent } from 'react';
import MyButton from '../common/my-button';
import MyTextbox from '../common/my-textbox';

interface CounterProps {
  init: number;
}

interface CounterState {
  count: number;
}

export default class Counter extends React.Component<
  CounterProps,
  CounterState
> {
  constructor(props: CounterProps) {
    super(props);
    this.state = { count: +props.init || 1 };
  }

  componentDidMount() {
    let countStr: string = '';
    if (window.localStorage.getItem('count')) {
      countStr = window.localStorage.getItem('count')!;
    }
    this.setState({ count: Number.parseInt(countStr) ?? this.state.count });
  }

  componentWillUnmount() {
    window.localStorage.setItem('count', this.state.count.toString());
  }

  increment = (incr: number) => {
    this.setState({ count: this.state.count + incr });
  };

  change = (evt: ChangeEvent<HTMLInputElement>) => {
    if (Number.isInteger(+evt.target.value)) {
      this.setState({ count: +evt.target.value });
    }
  };

  render() {
    const { count } = this.state;
    return (
      <>
        <h1>The count is: {count} </h1>
        <MyButton onIncrement={this.increment} value={1} />
        <MyButton onIncrement={this.increment} value={-10} />
        <MyButton onIncrement={this.increment} value={100} />
        <MyTextbox value={count} onChange={this.change} />
      </>
    );
  }
}
