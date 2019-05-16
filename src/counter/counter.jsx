import React from 'react';
import MyButton from './my-button';
import MyTextbox from './my-textbox'


export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: +props.init || 1 };
    }

    componentDidMount(){
        let count = +window.localStorage.getItem("count");
        this.setState( {count: (count || this.state.count)} )
    }

    componentWillUnmount(){
        window.localStorage.setItem("count", this.state.count);
    }

    click = (incr) => {
        this.setState({ count: this.state.count + incr });
    }

    change = (e) => {
        if (Number.isInteger(+e.target.value)) {
            this.setState({ count: +e.target.value });
        }
    }

    render() {
        const { count } = this.state;
        return (<>
            <h1>the count is: {count} </h1>
            <MyButton onClick={this.click} incr="1" />
            <MyButton onClick={this.click} incr="-10" />
            <MyButton onClick={this.click} incr="100" />
            <MyTextbox value={count} onChange={this.change} />
        </>);
    }
}