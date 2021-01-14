import React, { useState } from 'react';
import useInterval from './use-interval';
import { Button } from 'reactstrap';
import Day from './Day';

function getTime() {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  return new Intl.DateTimeFormat('en-CA', options).format(new Date());
}
function getDay() {
  const options = {
    weekday: 'long',
  };
  return new Intl.DateTimeFormat('en-CA', options).format(new Date());
}

export default function Clock() {
  const [currentTime, setTime] = useState(getTime());
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // const [, updateState] = React.useState();
  // const forceUpdate = () => updateState({});

  // const updateTime = React.useCallback(() => {
  //   setTime(getTime());
  // }, []);

  // function updateTime() {
  //   setTime(getTime());

  // }

  useInterval(
    () => {
      setTime(getTime());
    },
    isTimerRunning ? 1000 : null
  );

  function timerToggler() {
    setTime(getTime());
    setIsTimerRunning(!isTimerRunning);
  }

  //console.log('rerender');
  return (
    <div>
      <Button color='primary' onClick={timerToggler}>
        Toggle Clock
      </Button>
      <h1>{currentTime}</h1>
      <Day day={getDay()} />
    </div>
  );
}
