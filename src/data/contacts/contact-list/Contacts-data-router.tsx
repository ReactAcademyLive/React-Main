/* eslint-disable react-refresh/only-export-components */
import ContactApi from '../contact-api/ContactApi';
import Contact from '../contact-api/ContactType';
import ContactTable from './ContactTable';
import {
  /* useRevalidator, */ useSubmit,
  useLoaderData,
  ActionFunctionArgs,
  redirect,
} from 'react-router-dom';
// import ContactApi from '../contact-api/ContactApiAzure';

export default function Contacts() {
  const contacts: Contact[] = useLoaderData() as Contact[];
  const submit = useSubmit();

  //const revalidator = useRevalidator();
  // useEffect(() => {
  //   ContactApi.registerNotification(revalidator.revalidate);
  //   return () => {
  //     ContactApi.unregisterNotification();
  //   };
  // }, [revalidator.revalidate]);

  function modifyContact(formData: FormData) {
    submit(formData, { method: 'post' });
  }
  function deleteContact(id: string | number) {
    const data = new FormData();
    data.append('id', id.toString());
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

export async function action({ request, params }: ActionFunctionArgs) {
  console.log(`action params: ${params}`);
  if (request.method === 'DELETE') {
    const formData = await request.formData();
    await ContactApi.deleteContact((formData.get('id') as string) ?? '');
  } else {
    const formData = await request.formData();
    const contact: Contact = Object.fromEntries(formData) as unknown as Contact;
    if (contact.id === '0') contact.id = 0;
    await ContactApi.saveContact({
      id: contact.id,
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
    });
  }
  return redirect('/data/contacts-data-router');
}
