import ContactApi from '../contact-api/ContactApi';
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

export function loader() {
  return ContactApi.getAllContacts();
}

export async function action({ request, params }) {
  if (request.method === 'DELETE') {
    const formData = await request.formData();
    await ContactApi.deleteContact(formData.get('id'));
  } else {
    const formData = await request.formData();
    const contact = Object.fromEntries(formData);
    await ContactApi.saveContact({
      id: contact.id !== '0' ? contact.id : undefined,
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
    });
  }
  //  return redirect('/data/contacts-data-router');
}
