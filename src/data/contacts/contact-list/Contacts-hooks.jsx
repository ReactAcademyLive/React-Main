import React from 'react';
import ContactApi from '../contact-api/ContactApi';
import ContactTable from './ContactTable';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Contacts() {
  /** @type {[Contacts, Function]} ContactState - state hook of contacts */
  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    refreshData();
    //  if (ContactApi.subscribeChangeNotification) {
    //    ContactApi.subscribeChangeNotification(refreshData)
    //  }

    // return ()=> {ContactApi.unsubscribeChangeNotification()}
  }, []);

  // This is the old way of calling data (Promise)
  // eslint-disable-next-line
  function refreshDataPromise() {
    ContactApi.getAllContacts()
      .then((data) => {
        setContacts(data);
      })
      .catch((err) => console.log(err));
  }

  // This is the modern way of calling data (async)
  async function refreshData() {
    try {
      let data = await ContactApi.getAllContacts();
      setContacts(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Contacts (using Hooks)</h1>
      <ContactTable contacts={contacts} />
      <Link to='/data/details'>
        <Button variant='primary'>Create Contact</Button>
      </Link>
    </>
  );
}

// to show a spinner while loading:
// { isLoading ? <Spinner /> : <ContactTable /> }
