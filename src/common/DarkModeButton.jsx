import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

const DarkModeButton = (props) => {
  const [mode, setMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)')?.matches
      ? 'dark'
      : 'light'
  );

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)')?.matches) {
      document.querySelector('body').setAttribute('data-theme', 'dark');
    }
  }, []);

  return (
    <Button
      size='sm'
      onClick={() => {
        if (mode === 'dark') {
          document.querySelector('body').removeAttribute('data-theme');
          setMode('light');
        } else {
          document.querySelector('body').setAttribute('data-theme', 'dark');
          setMode('dark');
        }
      }}
    >
      {mode === 'dark' ? 'Light' : 'Dark'} Mode
    </Button>
  );
};

export default DarkModeButton;
