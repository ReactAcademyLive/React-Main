import React from 'react';
import ContactTable from './ContactTable';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

export default function Contacts() {
  const contacts = useLoaderData();

  return (
    <>
      <h1>Contacts (using Data Routing)</h1>
      <ContactTable contacts={contacts} />
      <Link to='/data/details'>
        <Button variant='primary'>Create Contact</Button>
      </Link>
    </>
  );
}

// to show a spinner while loading:
// { isLoading ? <Spinner /> : <ContactTable /> }
