import { redirect, useLoaderData } from 'react-router-dom';
import ContactForm from './ContactForm';
import ContactApi from '../contact-api/ContactApi';

export default function ContactDetails() {
  const state = useLoaderData();

  function change() {}
  function submit() {}

  return (
    <>
      <h1>
        {state.id
          ? `Contact ${state.firstName} ${state.lastName} `
          : 'Create Contact'}
      </h1>
      <ContactForm {...state} onChange={change} onSubmit={submit} />
    </>
  );
}

export function createLoader() {
  return {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    formErrors: {},
  };
}

export async function detailsLoader({ params }) {
  let contact = await ContactApi.getContact(params.id);
  return { ...contact, formErrors: {} };
}

export async function detailsAction({ request, params }) {
  const formData = await request.formData();
  const state = Object.fromEntries(formData);
  await ContactApi.saveContact({
    id: state?.id,
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
  });

  return redirect('/data/contacts-data-router');
}
