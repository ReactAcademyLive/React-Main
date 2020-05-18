import React from 'react';
import ContactApi from './contact-api/ContactApi2';
import ContactTable from './ContactTable';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Contacts() {
  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    refreshData();
    //  if (ContactApi.subscribeChangeNotification) {
    //    ContactApi.subscribeChangeNotification(refreshData)
    //  }

    // return ()=> {ContactApi.unsubscribeChangeNotification()}
  }, []);

  function refreshData() {
    ContactApi.getAllContacts()
      .then((data) => {
        setContacts(data);
      })
      .catch((err) => console.log(err));
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
      <Link to='/data/details'>
        <Button color='primary'>Create Contact</Button>
      </Link>
    </>
  );
}

// to show a spinner while loading:
// { isLoading ? <Spinner /> : <ContactTable /> }
