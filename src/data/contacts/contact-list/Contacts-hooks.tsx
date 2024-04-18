import { useEffect, useState } from 'react';
import ContactApi from '../contact-api/ContactApi';
import ContactTable from './ContactTable';
import Contact from '../contact-api/ContactType';

export default function Contacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    refreshData();
    // ContactApi.registerNotifications(refreshData);
    // return () => {
    //   ContactApi.unregisterNotifications();
    // };
  }, []);

  // This is the modern way of calling data (async)
  async function refreshData() {
    try {
      const data = await ContactApi.getAllContacts();
      setContacts(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function modifyContact(formData: FormData) {
    const contact: Contact = Object.fromEntries(formData) as unknown as Contact;
    if (contact.id === '0') contact.id = 0;
    await ContactApi.saveContact(contact);
    await refreshData();
  }

  async function deleteContact(id: string | number) {
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
