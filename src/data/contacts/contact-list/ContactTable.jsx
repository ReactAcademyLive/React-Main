import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ContactTable = ({ contacts }) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>
              <Link to={`/data/details/${contact.id}`}>
                <Button variant='primary'>
                  <FontAwesomeIcon icon={faPenAlt} />
                </Button>
              </Link>
            </td>
            <td className='align-middle'>{contact.firstName}</td>
            <td className='align-middle'>{contact.lastName}</td>
            <td className='align-middle'>contact.email</td>
            <td className='align-middle'>
              <Button
                variant='danger'
                onClick={() => alert('This has to be programmed')}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ContactTable;
