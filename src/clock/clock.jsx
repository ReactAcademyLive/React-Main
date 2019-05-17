import React from 'react';
import { Button } from 'reactstrap';


function getTime() {
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    return new Intl.DateTimeFormat
        ('en-CA', options).format(new Date())
}


export default class Clock extends React.PureComponent {
   
    state = {
        time: getTime()
    }

    timerRef = null;

    startTimer = () => {
        this.timerRef = setInterval(() => {
            //console.log('tick');
            this.setState({time: getTime()});
        });

        this.setState({time: getTime()});
    }

    stopTimer = () => {
        clearInterval(this.timerRef);
        this.timerRef = null;
    }

    timerToggler = () => {
        if (this.timerRef) {
            this.stopTimer();
        } else {
            this.startTimer();
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextState.time !== this.state.time) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // componentDidUpdate(){
    //     console.log("tick");
    // }

    componentWillUnmount = () => {
        this.stopTimer();
    }

    render = () => {
        console.log(this.state.time);
        return (
            <>
                <Button color="primary" onClick={this.timerToggler}>
                    Toggle Clock
                </Button>
                <h1>{this.state.time}</h1>
            </>
        );
    }
}