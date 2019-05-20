import React from './node_modules/react';
import { Button } from './node_modules/reactstrap';


function getTime() {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  return new Intl.DateTimeFormat
    ('en-CA', options).format(new Date())
}


export default function Clock(props) {
  const [time, setTime] = React.useState(getTime());
  const timer = React.useRef(null);

  function startTimer() {
    timer.current=(setInterval(() => {
      setTime(getTime());
    }));
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
