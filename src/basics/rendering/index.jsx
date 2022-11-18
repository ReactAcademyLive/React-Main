import { useState } from 'react';
import { Button } from 'react-bootstrap';

function Rendering() {
  const [obj, setObj] = useState({
    count: 1,
    name: 'Adam',
    adress: { city: 'ottawa', province: 'On' },
  });

  return (
    <>
      <h1>Rendering</h1>
      <Button
        onClick={() => {
          setObj({ ...obj, adress: { ...obj.adress, city: 'Montreal' } });
        }}
      >
        {obj.count}
      </Button>
    </>
  );
}

export default Rendering;
