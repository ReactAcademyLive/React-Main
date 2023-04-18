import { ChangeEventHandler, createContext } from 'react';

export interface MyContext {
  firstName: string;
  lastName?: string;
  color: string;
  onChange?: ChangeEventHandler;
}

export default createContext<MyContext>({ firstName: '', color: '' });
