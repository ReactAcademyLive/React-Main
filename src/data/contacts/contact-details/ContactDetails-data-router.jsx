import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ContactForm from './ContactForm-data-router';

export default function ContactDetails() {
  const state = useLoaderData();

  return (
    <>
      <h1>
        {state.id
          ? `Contact ROUTE ${state.firstName} ${state.lastName} `
          : 'Create Contact ROUTE'}
      </h1>
      <ContactForm {...state} />
    </>
  );
}
