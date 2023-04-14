import React, { useState, useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';

const storedTheme = localStorage.getItem('theme');

const arrayOfThemes = [
  { name: 'Light', icon: '☀️' },
  { name: 'Dark', icon: '🌙' },
  { name: 'Auto', icon: '⚙️' },
];

export default function DarkModeMenu() {
  const [mode, setMode] = useState(getPreferredTheme());

  useEffect(() => {
    if (
      mode === 'auto' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', mode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getPreferredTheme() {
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function setPreferredTheme(theme) {
    if (
      theme === 'auto' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }

    localStorage.setItem('theme', theme);
    setMode(theme);
  }

  return (
    <NavDropdown
      title={
        <>
          {
            arrayOfThemes.find((theme) => theme.name.toLowerCase() === mode)
              ?.icon
          }{' '}
        </>
      }
      id='lang'
    >
      {arrayOfThemes.map((theme) => {
        const active = mode === theme.name.toLowerCase();
        return (
          <NavDropdown.Item
            key={theme.name}
            className={active ? 'active' : ''}
            onClick={() => {
              setPreferredTheme(theme.name.toLocaleLowerCase());
            }}
          >
            {' '}
            {theme.icon} {theme.name} {active ? '✔️' : ''}
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
}
