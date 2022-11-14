import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ContactForm from './ContactForm';

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
