import { useContext } from 'react';
import { PersonContext } from './PersonContext';

export default function DisplayData() {
  const person = useContext(PersonContext);
  return (
    <h1 style={{ color: person.color }}>
      The name is {person.firstName} {person.lastName}
    </h1>
  );
}
