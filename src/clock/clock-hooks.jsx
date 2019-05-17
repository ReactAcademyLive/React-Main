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


export default function Clock(props) {
  const [time, setTime] = React.useState(getTime());
  const ref = React.useRef({});

  function startTimer() {
    ref.current.timer=(setInterval(() => {

      setTime(getTime());
    }));
    setTime(getTime());
  }

  function stopTimer() {
    clearInterval(ref.current.timer);
    ref.current.timer = (null);
  }

  function timerToggler() {
    if (ref.current.timer) {
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
