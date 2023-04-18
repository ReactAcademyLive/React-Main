import { ReactNode } from 'react';

export interface DisplayMouseState {
  x: number;
  y: number;
}

export interface DisplayMouseProps {
  mouse: DisplayMouseState;
}

export interface MouseProviderProps {
  children: ReactNode;
}

export interface MouseProviderFnAsChildProps {
  children: (mouse: DisplayMouseState) => ReactNode;
}
