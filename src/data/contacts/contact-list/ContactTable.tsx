import { FormEvent, useState } from 'react';
import { Table, Button, Form as F } from 'react-bootstrap';
import { Link, Form } from 'react-router-dom';
import Contact from '../contact-api/ContactType';

interface ContactTableProps {
  contacts: Contact[];
  modifyContact: (formData: FormData) => void;
  deleteContact: (id: string | number) => void;
}

function ContactTable({
  contacts,
  modifyContact,
  deleteContact,
}: ContactTableProps) {
  const [modificationRow, setModificationRow] = useState<
    string | number | null
  >(null);

  function modifyRow(id: string | number | null) {
    setModificationRow(id);
  }

  return (
    <Form
      onSubmit={async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setModificationRow(null);
        modifyContact(new FormData(evt.currentTarget));
      }}
    >
      <Table striped>
        <thead>
          <tr>
            <th className='text-body-secondary' style={{ maxWidth: 70 }}>
              id
            </th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) =>
            contact.id === modificationRow ? (
              <EditRow key={contact.id} contact={contact} setRow={modifyRow} />
            ) : (
              <Row
                key={contact.id}
                contact={contact}
                setRow={modifyRow}
                deleteContact={deleteContact}
              />
            )
          )}
        </tbody>
        <tfoot>
          {modificationRow === 0 ? (
            <EditRow
              contact={{ id: 0, firstName: '', lastName: '', email: '' }}
              setRow={modifyRow}
            />
          ) : (
            <tr>
              <td colSpan={5}>
                <Button
                  title='Create Contact'
                  variant='primary'
                  onClick={() => {
                    setModificationRow(0);
                  }}
                >
                  ➕ Create Contact
                </Button>
              </td>
            </tr>
          )}
        </tfoot>
      </Table>
    </Form>
  );
}

export default ContactTable;

interface RowProps {
  contact: Contact;
  setRow: (id: string | number) => void;
  deleteContact: (id: string | number) => void;
}

function Row({ contact, setRow, deleteContact }: RowProps) {
  return (
    <tr key={contact.id}>
      <td
        style={{ maxWidth: 70 }}
        className='align-middle text-body-secondary text-truncate'
        title={contact.id.toString()}
      >
        {contact.id}
      </td>
      <td className='align-middle'>{contact.firstName}</td>
      <td className='align-middle'>{contact.lastName}</td>
      <td className='align-middle'>
        <a href={`mailto:{contact.email}`}>{contact.email}</a>
      </td>
      <td className='align-middle'>
        <Button
          variant='primary'
          className='me-3'
          title='Edit'
          onClick={() => {
            setRow(contact.id);
          }}
        >
          🖊️
        </Button>

        <Link to={`/data/details-data-router/${contact.id}`}>
          <Button variant='secondary' className='me-3' title='Details'>
            🧾
          </Button>
        </Link>
        <Button
          title='Delete'
          variant='danger'
          onClick={() => deleteContact(contact.id)}
        >
          🗑️
        </Button>
      </td>
    </tr>
  );
}

interface EditRowProps {
  contact: Contact;
  setRow: (id: string | number | null) => void;
}
function EditRow({ contact, setRow }: EditRowProps) {
  return (
    <tr key={contact.id} className='bg-warning'>
      <td
        style={{ maxWidth: 70 }}
        className='align-middle text-body-secondary text-truncate'
        title={contact.id.toString()}
      >
        <F.Control
          name='id'
          placeholder='ID'
          defaultValue={contact.id}
          readOnly
        />
      </td>
      <td className='align-middle'>
        <F.Control
          name='firstName'
          placeholder='First Name'
          defaultValue={contact.firstName}
        />
      </td>
      <td className='align-middle'>
        <F.Control
          name='lastName'
          placeholder='Last Name'
          defaultValue={contact.lastName}
        />
      </td>
      <td className='align-middle'>
        <F.Control
          name='email'
          placeholder='name@email.com'
          defaultValue={contact.email}
        />
      </td>
      <td className='align-middle'>
        <Button variant='success' className='me-3' title='Save' type='submit'>
          ✔️
        </Button>
        <Button
          variant='warning'
          className='me-3'
          title='Cancel'
          onClick={() => {
            setRow(null);
          }}
        >
          ❌
        </Button>
      </td>
    </tr>
  );
}
