/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ChangeEvent,
  createContext,
  useState,
  useContext,
  ReactNode,
  ChangeEventHandler,
} from 'react';

export interface Person {
  firstName: string;
  lastName?: string;
  color: string;
  onChange?: ChangeEventHandler;
}

const PersonContext = createContext<Person>({
  firstName: '',
  color: '',
});

//------------------------------------------------
// Separation, everything below is for a
// custom provider and hook pattern
//------------------------------------------------

function PersonProvider({ children }: { children: ReactNode }) {
  const [firstName, setFirstName] = useState('John');
  const [color, setColor] = useState('blue');

  function change(evt: ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.target;

    const fnName = 'set' + name[0].toUpperCase() + name.slice(1);
    const str = `${fnName}("${value}")`;

    eval(str);
  }

  return (
    <PersonContext.Provider value={{ firstName, color, onChange: change }}>
      {children}
    </PersonContext.Provider>
  );
}

function usePerson() {
  return useContext(PersonContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { PersonContext, PersonProvider, usePerson };
