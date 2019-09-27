import React from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenAlt /*, faTrashAlt */ } from '@fortawesome/free-solid-svg-icons';

const ContactTable = props => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.map(emp => (
          <tr key={emp.id}>
            <td>
              <Link to={`/contact/${emp.id}`}>
                <Button color='primary'>
                  <FontAwesomeIcon icon={faPenAlt} />
                </Button>
              </Link>
            </td>
            <td className='align-middle'>{emp.firstName}</td>
            <td className='align-middle'>{emp.lastName}</td>
            <td className='align-middle'>
              {/* <Button color="danger" onClick={() => null}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button> */}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ContactTable;
