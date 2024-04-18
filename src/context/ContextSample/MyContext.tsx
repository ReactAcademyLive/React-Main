import { ChangeEventHandler, createContext } from 'react';

export interface MyContext {
  firstName: string;
  lastName?: string;
  color: string;
  onChange?: ChangeEventHandler;
}

// eslint-disable-next-line react-refresh/only-export-components
export default createContext<MyContext>({ firstName: '', color: '' });
