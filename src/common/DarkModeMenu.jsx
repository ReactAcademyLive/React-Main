import React, { useState, useEffect } from 'react';
import { NavDropdown, Button } from 'react-bootstrap';
import {
  SunFill,
  MoonStarsFill,
  CircleHalf,
  Check2,
} from 'react-bootstrap-icons';

const storedTheme = localStorage.getItem('theme');

const arrayOfThemes = [
  { name: 'Light', icon: <SunFill /> },
  { name: 'Dark', icon: <MoonStarsFill /> },
  { name: 'Auto', icon: <CircleHalf /> },
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
            {theme.icon} {theme.name} {active ? <Check2 /> : ''}
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
}
