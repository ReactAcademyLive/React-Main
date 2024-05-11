import { ContextType, useContext, Component } from 'react';
import MyInputs from './MyInputs';
import { PersonContext, Person } from './PersonContext';
//import { usePerson } from './PersonContext';

//Hooks only work with functions
export default function EditData() {
  const person = useContext(PersonContext);
  //const person = usePerson();
  return <MyInputs {...person} />;
}

//
//
//
//
//
//
//
//
//
//
//
//
//

//
//Other (older) altenatives of consuming hooks:

//1. Old way using the context consumer
//standard way to consume context, available to both functions and classes
//(this is a "function as child component")

export function ContextConsumer() {
  return (
    <PersonContext.Consumer>
      {
        (person: Person) => <MyInputs {...person} /> //
      }
    </PersonContext.Consumer>
  );
}

//2. another way using ContextTypes
//This way only works with classes.

export class ContextTypes extends Component {
  static contextType = PersonContext;
  declare context: ContextType<typeof PersonContext>;

  render() {
    const ctx = this.context;
    return <MyInputs {...ctx} />;
  }
}
