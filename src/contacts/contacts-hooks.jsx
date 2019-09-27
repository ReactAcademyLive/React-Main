import React from 'react';
import ContactApi from '../contact-api/contact-api';
import ContactTable from './contact-table';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Contacts() {
  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    refreshData();
  }, []);

  function refreshData() {
    ContactApi.getAllContacts()
      .then(data => {
        setContacts(data);
      })
      .catch(err => console.log(err));
    // try {
    //   let data = await ContactApi.getAllContacts();
    //   setContacts(data);
    // }
    // catch (err) {
    //   console.log(err);
    // }
  }

  return (
    <>
      <h1>Contacts (using Hooks)</h1>
      <ContactTable contacts={contacts} />
      <Link to='/contact'>
        <Button color='primary'>Create Contact</Button>
      </Link>
    </>
  );
}
