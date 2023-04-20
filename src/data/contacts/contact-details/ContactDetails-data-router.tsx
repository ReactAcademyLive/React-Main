import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
  useLoaderData,
} from 'react-router-dom';
import ContactForm from './ContactForm';
import ContactApi from '../contact-api/ContactApi';
import Contact from '../contact-api/ContactType';

interface ContactDetailsState extends Contact {
  formErrors: FormErrors;
}

type FormErrors = {
  [Property in keyof Contact]?: string;
};

export default function ContactDetails() {
  const state: ContactDetailsState = useLoaderData() as ContactDetailsState;

  function change() {}
  function submit() {}

  return (
    <>
      <h1>
        {state.id
          ? `Contact ${state.firstName} ${state.lastName} `
          : 'Create Contact'}
      </h1>
      <ContactForm {...state} onChange={change} onSubmit={submit} />
    </>
  );
}

export function createLoader() {
  return {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    formErrors: {},
  };
}

export async function detailsLoader({ params }: LoaderFunctionArgs) {
  let contact = await ContactApi.getContact(params.id ?? '');
  return { ...contact, formErrors: {} };
}

export async function detailsAction({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const state: Contact = Object.fromEntries(formData) as unknown as Contact;
  await ContactApi.saveContact({
    id: state?.id,
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
  });

  return redirect('/data/contacts-data-router');
}
