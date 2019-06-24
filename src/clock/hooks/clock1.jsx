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


export default function Clock() {
  const [time, setTime] = React.useState(getTime());
  const timer = React.useRef(null);

  function startTimer() {
    timer.current=(setInterval(() => {
      setTime(getTime());
    }, 1000 ) );
    setTime(getTime());
  }

  function stopTimer() {
    clearInterval(timer.current);
    timer.current = null;
  }

  function timerToggler() {
    if (timer.current) {
      stopTimer();
    } else {
      startTimer();
    }
  }

  React.useEffect(()=>{
    return ()=>{
      stopTimer();
    }
  },[])
  
  return (
    <>
      <Button color="primary" onClick={timerToggler}>
          Toggle Clock
      </Button>
      <h1>{time}</h1>
    </>
  );
}
