import React, { ChangeEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ContactApi from '../contact-api/ContactApi';
import ContactForm from './ContactForm';
import Contact from '../contact-api/ContactType';

interface ContactDetailsState extends Contact {
  formErrors: FormErrors;
}

type FormErrors = {
  [Property in keyof Contact]?: string;
};

export default function ContactDetails() {
  const [state, setState] = React.useState<ContactDetailsState>({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    formErrors: {},
  });

  const id = useParams().id;
  const navigate = useNavigate();

  async function getData(id: string) {
    let contact = await ContactApi.getContact(id);
    setState({ ...contact, formErrors: {} });
  }

  React.useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);

  React.useEffect(() => {
    contactFormIsValid();
  });

  async function submit() {
    if (!contactFormIsValid()) {
      return;
    }
    await ContactApi.saveContact({
      id: state.id,
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
    });
    navigate('/data/contacts');
  }

  function change(evt: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, [evt.target.name]: evt.target.value });
  }

  function contactFormIsValid() {
    let formErrors: FormErrors = {};

    if (state.firstName.length < 3) {
      formErrors.firstName = `First name needs three letters or more (${state.firstName})`;
    }

    if (state.lastName.length < 3) {
      formErrors.lastName = 'Last name needs three letters or more';
    }

    if (!isEquivalent(state.formErrors, formErrors)) {
      setState({ ...state, formErrors });
    }

    return Object.keys(formErrors).length === 0;
  }

  return (
    <>
      <h1>
        {id
          ? `Contact ${state.firstName} ${state.lastName} `
          : 'Create Contact'}
      </h1>
      <ContactForm {...state} onChange={change} onSubmit={submit} />
    </>
  );
}

function isEquivalent(a: Record<string, any>, b: Record<string, any>) {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length !== bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}
