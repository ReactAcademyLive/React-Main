import React /*, { useEffect } */ from 'react';
import ContactTable from './ContactTable';
import {
  /* useRevalidator, */ useSubmit,
  useLoaderData,
} from 'react-router-dom';
// import ContactApi from '../contact-api/ContactApiAzure';

export default function Contacts() {
  const contacts = useLoaderData();
  const submit = useSubmit();

  //const revalidator = useRevalidator();
  // useEffect(() => {
  //   ContactApi.registerNotification(revalidator.revalidate);
  //   return () => {
  //     ContactApi.unregisterNotification();
  //   };
  // }, [revalidator.revalidate]);

  async function modifyContact(formData) {
    submit(formData, { method: 'post' });
  }
  async function deleteContact(id) {
    const data = new FormData();
    data.append('id', id);
    submit(data, { method: 'delete' });
  }

  return (
    <>
      <h1>Contacts (using Data Routing)</h1>
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
