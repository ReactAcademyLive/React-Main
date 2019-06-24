import React, { useState } from 'react';
import useInterval from './use-interval';
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


export default function Clock() {
  const [time, setTime] = useState(getTime());
  const [isTimerRunning, setIsTimerRunning] =  useState(false);

  useInterval(() => { setTime(getTime()); },
    isTimerRunning ? 100 : null
  );

  function timerToggler() {
      setIsTimerRunning(!isTimerRunning);
      setTime(getTime());
  }

  return (
    <div>
      <Button color="primary" onClick={timerToggler}>
        Toggle Clock
      </Button>
      <h1>{time}</h1>
    </div>
  );
}

