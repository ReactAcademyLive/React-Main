import React from 'react';
import ContactApi from '../contact-api/ContactApi';
import ContactTable from './ContactTable';

export default function Contacts() {
  /** @type {[Contacts, Function]} ContactState - state hook of contacts */
  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    refreshData();
    // ContactApi.registerNotifications(refreshData);
    // return () => {
    //   ContactApi.unregisterNotifications();
    // };
  }, []);

  // This is the modern way of calling data (async)
  async function refreshData() {
    try {
      let data = await ContactApi.getAllContacts();
      setContacts(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function modifyContact(formData) {
    const contact = Object.fromEntries(formData);
    //change id from "0" to undefined (for contact creation)
    contact.id = contact.id !== '0' ? contact.id : undefined;
    await ContactApi.saveContact(contact);
    await refreshData();
  }

  async function deleteContact(id) {
    await ContactApi.deleteContact(id);
    refreshData();
  }

  return (
    <>
      <h1>Contacts (using Hooks)</h1>
      <ContactTable
        contacts={contacts}
        modifyContact={modifyContact}
        deleteContact={deleteContact}
      />
    </>
  );
}

// to show a spinner while loading:
// { isLoading ? <Spinner /> : <ContactTable /> }
